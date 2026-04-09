import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js"

import { ComponentPreviewRenderer } from "~/components/component-preview-renderer"
import { copyToClipboardWithMeta } from "~/components/copy-button"
import {
  DARK_THEME,
  DesignSystemProvider,
  useDesignSystem,
  useDocumentDesignSystem
} from "~/hooks/use-design-system"
import {
  BASE_COLORS,
  buildPreviewTheme,
  DEFAULT_CREATE_CONFIG,
  DEFAULT_CREATE_ITEM,
  FONTS,
  getAvailableIconLibraryOptions,
  getThemesForBaseColor,
  isInvertedMenuColor,
  isTranslucentMenuColor,
  MENU_ACCENTS,
  MENU_COLORS,
  RADII,
  SUPPORTED_ICON_LIBRARY_NAMES
} from "~/lib/create/config"
import { parseCreateSearchParams, serializeCreateSearchParams } from "~/lib/create/url-state"
import { cn } from "~/lib/utils"
import { Index } from "~/registry/__index__"
import { STYLES } from "~/registry/styles"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"
import { Button } from "~/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/registry/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "~/registry/ui/dialog"
import { Input } from "~/registry/ui/input"
import { NativeSelect, NativeSelectOption } from "~/registry/ui/native-select"

const WELCOME_DIALOG_KEY = "solidui:create:welcome-dialog"
const LEGACY_OPTION_LABELS = {
  gray: "Gray (Legacy)",
  hugeicons: "Hugeicons (Unsupported)",
  phosphor: "Phosphor (Unsupported)",
  remixicon: "Remix Icon (Unsupported)"
} as const

type LockableField =
  | "style"
  | "baseColor"
  | "themeName"
  | "chartColor"
  | "iconLibrary"
  | "font"
  | "fontHeading"
  | "radius"
  | "menuAccent"
  | "menuColor"

const PREVIEW_ITEMS = Object.values(Index)
  .filter((item) => item?.type === "registry:example")
  .map((item) => ({
    name: item.name as string,
    title: formatItemTitle(item.name as string)
  }))

const PRESET_PREVIEW_ITEMS = [
  { label: "01", value: "preview-02" },
  { label: "02", value: "preview" }
] as const

const PRESET_PREVIEW_ITEM_VALUES = new Set(PRESET_PREVIEW_ITEMS.map((item) => item.value))

function formatItemTitle(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function randomItem<T>(values: readonly T[]) {
  return values[Math.floor(Math.random() * values.length)]
}

function withCurrentOption(
  options: { value: string; label: string }[],
  currentValue: string,
  fallbackLabel?: string
) {
  if (options.some((option) => option.value === currentValue)) {
    return options
  }

  return [
    { value: currentValue, label: fallbackLabel ?? formatItemTitle(currentValue) },
    ...options
  ]
}

function shouldIgnoreKeydownTarget(target: EventTarget | null) {
  return (
    (target instanceof HTMLElement && target.isContentEditable) ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  )
}

function LockButton(props: {
  field: LockableField
  isLocked: (field: LockableField) => boolean
  onToggle: (field: LockableField) => void
}) {
  return (
    <Button
      variant="ghost"
      size="xs"
      class="h-auto px-2 py-1 text-xs"
      onClick={() => props.onToggle(props.field)}
    >
      {props.isLocked(props.field) ? "Unlock" : "Lock"}
    </Button>
  )
}

function CreatePreviewSurface() {
  const design = useDesignSystem()
  const documentDesign = useDocumentDesignSystem()
  let previewRef: HTMLDivElement | undefined
  const isPresetPreview = createMemo(() => PRESET_PREVIEW_ITEM_VALUES.has(design.item()))

  const selectedFont = createMemo(() => FONTS.find((font) => font.value === design.font()))
  const selectedHeadingFont = createMemo(() => {
    const fontHeading = design.fontHeading()
    if (fontHeading === "inherit") {
      return selectedFont()
    }

    return FONTS.find((font) => font.value === fontHeading)
  })

  const previewTheme = createMemo(() =>
    buildPreviewTheme({
      baseColor: design.baseColor(),
      theme: design.themeName(),
      chartColor: design.chartColor(),
      menuAccent: design.menuAccent(),
      radius: design.effectiveRadius()
    })
  )

  const previewStyle = createMemo<Record<string, string>>(() => {
    const theme = previewTheme()
    const colorMode = documentDesign.theme()
    const activeThemeVars = colorMode === DARK_THEME ? theme?.cssVars.dark : theme?.cssVars.light
    const nextStyle: Record<string, string> = {
      "font-family": selectedFont()?.family ?? "var(--font-sans)",
      "--font-sans": selectedFont()?.family ?? "var(--font-sans)",
      "--font-heading":
        selectedHeadingFont()?.family ?? selectedFont()?.family ?? "var(--font-sans)"
    }

    for (const [key, value] of Object.entries(activeThemeVars ?? {})) {
      nextStyle[`--${key}`] = value
    }

    return nextStyle
  })

  createEffect(() => {
    const root = previewRef
    const menuColor = design.menuColor()

    if (!root) {
      return
    }

    const applyMenuState = () => {
      const nodes = root.querySelectorAll<HTMLElement>(".cn-menu-target, [data-menu-translucent]")

      nodes.forEach((node) => {
        if (node.classList.contains("cn-menu-target")) {
          node.classList.toggle("dark", isInvertedMenuColor(menuColor))
        }

        if (isTranslucentMenuColor(menuColor)) {
          node.classList.add("cn-menu-translucent")
          node.removeAttribute("data-menu-translucent")
        } else if (node.classList.contains("cn-menu-translucent")) {
          node.classList.remove("cn-menu-translucent")
          node.setAttribute("data-menu-translucent", "")
        }
      })
    }

    applyMenuState()

    const observer = new MutationObserver(() => applyMenuState())
    observer.observe(root, { childList: true, subtree: true })

    onCleanup(() => observer.disconnect())
  })

  return (
    <div class="space-y-4">
      <Show when={design.hasUnsupportedIconLibrary()}>
        <Alert>
          <AlertTitle>Unsupported Icon Library</AlertTitle>
          <AlertDescription>
            This preset targets `{design.iconLibrary()}`. Previewing with `lucide` until a Solid
            port exists.
          </AlertDescription>
        </Alert>
      </Show>
      <Show when={design.baseColor() === "gray"}>
        <Alert>
          <AlertTitle>Legacy Base Color</AlertTitle>
          <AlertDescription>
            `gray` is a legacy preset value. Previewing it with the local `zinc` palette.
          </AlertDescription>
        </Alert>
      </Show>
      <div
        class={cn(
          "relative overflow-hidden rounded-2xl border bg-surface p-2 sm:p-4",
          documentDesign.theme() === DARK_THEME && "dark"
        )}
      >
        <div
          ref={previewRef}
          class={cn(
            "min-h-[420px] rounded-xl border bg-background shadow-sm",
            isPresetPreview() ? "overflow-auto p-0" : "p-6 sm:p-10",
            `style-${design.style()}`,
            documentDesign.theme() === DARK_THEME && "dark"
          )}
          style={previewStyle()}
        >
          <div
            class={cn(
              isPresetPreview()
                ? "min-h-[560px] w-full"
                : "mx-auto flex min-h-[320px] max-w-3xl items-center justify-center"
            )}
          >
            <ComponentPreviewRenderer name={design.item()} />
          </div>
        </div>

        <Show when={isPresetPreview()}>
          <div class="absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-xl bg-card/90 p-1 shadow-xl backdrop-blur-xl">
            <For each={PRESET_PREVIEW_ITEMS}>
              {(item) => (
                <Button
                  variant="ghost"
                  size="sm"
                  data-active={design.item() === item.value}
                  class="h-7 min-w-8 rounded-lg px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                  onClick={() => design.setItem(item.value)}
                >
                  {item.label}
                </Button>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  )
}

function CreatePageContent() {
  const design = useDesignSystem()
  const documentDesign = useDocumentDesignSystem()
  const [locks, setLocks] = createSignal<Set<LockableField>>(new Set())
  const [historyEntries, setHistoryEntries] = createSignal<string[]>([])
  const [historyIndex, setHistoryIndex] = createSignal(-1)
  const [urlSearch, setUrlSearch] = createSignal("")
  const [itemSearch, setItemSearch] = createSignal("")
  const [showResetDialog, setShowResetDialog] = createSignal(false)
  const [showWelcomeDialog, setShowWelcomeDialog] = createSignal(false)
  const [showExplorer, setShowExplorer] = createSignal(false)

  const filteredItems = createMemo(() => {
    const query = itemSearch().trim().toLowerCase()

    if (!query) {
      return PREVIEW_ITEMS
    }

    return PREVIEW_ITEMS.filter((item) =>
      `${item.name} ${item.title}`.toLowerCase().includes(query)
    )
  })

  const shareSearch = createMemo(() =>
    serializeCreateSearchParams({
      style: design.style(),
      baseColor: design.baseColor(),
      themeName: design.themeName(),
      chartColor: design.chartColor(),
      iconLibrary: design.iconLibrary(),
      font: design.font(),
      fontHeading: design.fontHeading(),
      radius: design.radius(),
      menuAccent: design.menuAccent(),
      menuColor: design.menuColor(),
      item: design.item(),
      preset: design.preset()
    })
  )

  const shareUrl = createMemo(() => `${window.location.origin}/create?${shareSearch()}`)

  const canGoBack = createMemo(() => historyIndex() > 0)
  const canGoForward = createMemo(
    () => historyIndex() >= 0 && historyIndex() < historyEntries().length - 1
  )
  const baseColorOptions = createMemo(() =>
    withCurrentOption(
      BASE_COLORS.map((color) => ({ value: color.name, label: color.title })),
      design.baseColor(),
      LEGACY_OPTION_LABELS.gray
    )
  )
  const themeOptions = createMemo(() =>
    withCurrentOption(
      getThemesForBaseColor(design.baseColor()).map((theme) => ({
        value: theme.name,
        label: theme.title
      })),
      design.themeName(),
      LEGACY_OPTION_LABELS.gray
    )
  )
  const chartColorOptions = createMemo(() =>
    withCurrentOption(
      getThemesForBaseColor(design.baseColor()).map((theme) => ({
        value: theme.name,
        label: theme.title
      })),
      design.chartColor(),
      LEGACY_OPTION_LABELS.gray
    )
  )
  const iconLibraryOptions = createMemo(() =>
    withCurrentOption(
      getAvailableIconLibraryOptions().map((iconLibrary) => ({
        value: iconLibrary.name,
        label: iconLibrary.title
      })),
      design.iconLibrary(),
      LEGACY_OPTION_LABELS[design.iconLibrary() as keyof typeof LEGACY_OPTION_LABELS]
    )
  )

  const isLocked = (field: LockableField) => locks().has(field)

  const toggleLock = (field: LockableField) => {
    setLocks((current) => {
      const next = new Set(current)

      if (next.has(field)) {
        next.delete(field)
      } else {
        next.add(field)
      }

      return next
    })
  }

  const trackHistoryEntry = (value: string) => {
    setHistoryEntries((current) => {
      const existingIndex = current.indexOf(value)

      if (existingIndex >= 0) {
        setHistoryIndex(existingIndex)
        return current
      }

      const next = [...current, value]
      setHistoryIndex(next.length - 1)
      return next
    })
  }

  const applySearchState = (value: string, mode: "replace" | "push") => {
    const nextUrl = value ? `${window.location.pathname}?${value}` : window.location.pathname
    if (mode === "replace") {
      window.history.replaceState({ createSearch: value }, "", nextUrl)
    } else {
      window.history.pushState({ createSearch: value }, "", nextUrl)
    }
  }

  const syncFromLocation = (mode: "replace" | "push") => {
    const parsed = parseCreateSearchParams(new URLSearchParams(window.location.search))
    design.setState({
      style: parsed.state.style,
      baseColor: parsed.state.baseColor,
      themeName: parsed.state.themeName,
      chartColor: parsed.state.chartColor,
      iconLibrary: parsed.state.iconLibrary,
      font: parsed.state.font,
      fontHeading: parsed.state.fontHeading,
      radius: parsed.state.radius,
      menuAccent: parsed.state.menuAccent,
      menuColor: parsed.state.menuColor,
      item: parsed.state.item,
      preset: parsed.state.preset
    })
    setUrlSearch(parsed.search)

    if (`?${parsed.search}` !== window.location.search) {
      applySearchState(parsed.search, mode)
    }

    trackHistoryEntry(parsed.search)
  }

  const pushCurrentState = () => {
    const nextSearch = shareSearch()
    design.setPreset(new URLSearchParams(nextSearch).get("preset") ?? "")

    if (nextSearch === urlSearch()) {
      return
    }

    const currentIndex = historyIndex()

    applySearchState(nextSearch, historyIndex() === -1 ? "replace" : "push")
    setUrlSearch(nextSearch)
    setHistoryEntries((current) => {
      const sliced = currentIndex >= 0 ? current.slice(0, currentIndex + 1) : []
      const next = [...sliced, nextSearch]

      setHistoryIndex(next.length - 1)
      return next
    })
  }

  const reset = () => {
    const nextState = {
      style: design.style(),
      baseColor: isLocked("baseColor") ? design.baseColor() : DEFAULT_CREATE_CONFIG.baseColor,
      themeName: isLocked("themeName") ? design.themeName() : DEFAULT_CREATE_CONFIG.theme,
      chartColor: isLocked("chartColor") ? design.chartColor() : DEFAULT_CREATE_CONFIG.chartColor,
      iconLibrary: isLocked("iconLibrary")
        ? design.iconLibrary()
        : DEFAULT_CREATE_CONFIG.iconLibrary,
      font: isLocked("font") ? design.font() : DEFAULT_CREATE_CONFIG.font,
      fontHeading: isLocked("fontHeading")
        ? design.fontHeading()
        : DEFAULT_CREATE_CONFIG.fontHeading,
      radius: isLocked("radius") ? design.radius() : DEFAULT_CREATE_CONFIG.radius,
      menuAccent: isLocked("menuAccent") ? design.menuAccent() : DEFAULT_CREATE_CONFIG.menuAccent,
      menuColor: isLocked("menuColor") ? design.menuColor() : DEFAULT_CREATE_CONFIG.menuColor,
      item: design.item()
    } as const

    design.setState(nextState)
    setShowResetDialog(false)
  }

  const randomize = () => {
    const nextStyle = isLocked("style")
      ? design.style()
      : randomItem(STYLES.map((style) => style.name))
    const nextBaseColor = (
      isLocked("baseColor")
        ? design.baseColor()
        : randomItem(BASE_COLORS.map((baseColor) => baseColor.name))
    ) as ReturnType<typeof design.baseColor>
    const availableThemes = getThemesForBaseColor(nextBaseColor)
    const nextThemeName = isLocked("themeName")
      ? design.themeName()
      : randomItem(availableThemes.map((theme) => theme.name))
    const nextChartColor = isLocked("chartColor")
      ? design.chartColor()
      : randomItem(availableThemes.map((theme) => theme.name))
    const nextFont = isLocked("font") ? design.font() : randomItem(FONTS.map((font) => font.value))
    const nextFontHeading = isLocked("fontHeading")
      ? design.fontHeading()
      : randomItem(["inherit", ...FONTS.map((font) => font.value)] as const)
    const nextRadius = isLocked("radius")
      ? design.radius()
      : randomItem(RADII.map((radius) => radius.name))
    const nextIconLibrary = isLocked("iconLibrary")
      ? design.iconLibrary()
      : randomItem([...SUPPORTED_ICON_LIBRARY_NAMES])
    const nextMenuColor = isLocked("menuColor")
      ? design.menuColor()
      : randomItem(MENU_COLORS.map((color) => color.value))
    const nextMenuAccent = isLocked("menuAccent")
      ? design.menuAccent()
      : isTranslucentMenuColor(nextMenuColor)
        ? "subtle"
        : randomItem(MENU_ACCENTS.map((accent) => accent.value))

    design.setState({
      style: nextStyle,
      baseColor: nextBaseColor,
      themeName: nextThemeName,
      chartColor: nextChartColor,
      font: nextFont,
      fontHeading: nextFontHeading,
      radius: nextRadius,
      iconLibrary: nextIconLibrary,
      menuColor: nextMenuColor,
      menuAccent: nextMenuAccent
    })
  }

  onMount(() => {
    syncFromLocation("replace")
    design.setTheme(documentDesign.theme())

    try {
      const hasDismissedWelcome = window.localStorage.getItem(WELCOME_DIALOG_KEY)
      if (!hasDismissedWelcome) {
        setShowWelcomeDialog(true)
      }
    } catch {
      // ignore storage access issues
    }

    const onPopState = () => {
      const parsed = parseCreateSearchParams(new URLSearchParams(window.location.search))
      design.setState({
        style: parsed.state.style,
        baseColor: parsed.state.baseColor,
        themeName: parsed.state.themeName,
        chartColor: parsed.state.chartColor,
        iconLibrary: parsed.state.iconLibrary,
        font: parsed.state.font,
        fontHeading: parsed.state.fontHeading,
        radius: parsed.state.radius,
        menuAccent: parsed.state.menuAccent,
        menuColor: parsed.state.menuColor,
        item: parsed.state.item,
        preset: parsed.state.preset
      })
      setUrlSearch(parsed.search)
      trackHistoryEntry(parsed.search)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (shouldIgnoreKeydownTarget(event.target)) {
        return
      }

      const key = event.key.toLowerCase()

      if ((event.metaKey || event.ctrlKey) && key === "p") {
        event.preventDefault()
        setShowExplorer(true)
        return
      }

      if ((event.metaKey || event.ctrlKey) && key === "z") {
        event.preventDefault()
        if (event.shiftKey) {
          window.history.forward()
        } else {
          window.history.back()
        }
        return
      }

      if (event.ctrlKey && key === "y") {
        event.preventDefault()
        window.history.forward()
        return
      }

      if (!event.metaKey && !event.ctrlKey && key === "d") {
        event.preventDefault()
        documentDesign.toggleTheme()
        return
      }

      if (!event.metaKey && !event.ctrlKey && key === "r" && event.shiftKey) {
        event.preventDefault()
        if (showResetDialog()) {
          reset()
        } else {
          setShowResetDialog(true)
        }
        return
      }

      if (!event.metaKey && !event.ctrlKey && key === "r") {
        event.preventDefault()
        randomize()
      }
    }

    window.addEventListener("popstate", onPopState)
    window.addEventListener("keydown", onKeyDown)

    onCleanup(() => {
      window.removeEventListener("popstate", onPopState)
      window.removeEventListener("keydown", onKeyDown)
    })
  })

  createEffect(() => {
    design.setTheme(documentDesign.theme())
  })

  createEffect(() => {
    if (design.style() === "lyra" && design.radius() !== "none") {
      design.setRadius("none")
    }
    if (isTranslucentMenuColor(design.menuColor()) && design.menuAccent() === "bold") {
      design.setMenuAccent("subtle")
    }
  })

  createEffect(() => {
    if (!design.item() || !PREVIEW_ITEMS.some((item) => item.name === design.item())) {
      design.setItem(DEFAULT_CREATE_ITEM)
    }
  })

  createEffect(() => {
    if (historyIndex() === -1) {
      return
    }

    pushCurrentState()
  })

  return (
    <>
      <div class="mx-auto flex w-full max-w-[1500px] flex-col gap-6 px-4 py-6 lg:px-8 xl:flex-row">
        <section class="min-w-0 flex-1 xl:sticky xl:top-20 xl:self-start">
          <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 class="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Build your own SolidUI
              </h1>
              <p class="mt-1 text-sm text-muted-foreground sm:text-base">
                Customize styles, themes, fonts, radius, menu treatment, and icons with the same
                preset hash format as shadcn create.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                disabled={!canGoBack()}
              >
                Undo
              </Button>
              <Button
                variant="outline"
                onClick={() => window.history.forward()}
                disabled={!canGoForward()}
              >
                Redo
              </Button>
              <Button variant="outline" onClick={documentDesign.toggleTheme}>
                {documentDesign.theme() === DARK_THEME ? "Light" : "Dark"}
              </Button>
              <Button variant="outline" onClick={randomize}>
                Shuffle
              </Button>
            </div>
          </div>
          <CreatePreviewSurface />
        </section>

        <aside class="w-full xl:max-w-[420px]">
          <Card>
            <CardHeader>
              <CardTitle>Customizer</CardTitle>
              <CardDescription>
                Every change updates the preview without iframes and keeps the preset shareable.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-5">
              <ControlField
                field="item"
                title="Preview Item"
                description="Pick the component example to preview."
              >
                <div class="flex gap-2">
                  <Input value={formatItemTitle(design.item())} readOnly class="flex-1" />
                  <Button variant="outline" onClick={() => setShowExplorer(true)}>
                    Browse
                  </Button>
                </div>
              </ControlField>

              <SelectField
                title="Style"
                description="Controls the full component styling language."
                field="style"
                value={design.style()}
                onChange={(value) =>
                  design.setStyle(value as typeof design.style extends () => infer T ? T : never)
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={STYLES.map((style) => ({ value: style.name, label: style.title }))}
              />

              <SelectField
                title="Base Color"
                description="Sets the neutral palette used for surfaces and borders."
                field="baseColor"
                value={design.baseColor()}
                onChange={(value) =>
                  design.setBaseColor(
                    value as typeof design.baseColor extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={baseColorOptions()}
              />

              <SelectField
                title="Theme"
                description="Controls the accent color applied on top of the base palette."
                field="themeName"
                value={design.themeName()}
                onChange={(value) =>
                  design.setThemeName(
                    value as typeof design.themeName extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={themeOptions()}
              />

              <SelectField
                title="Chart Color"
                description="Overrides the chart palette independently from the main accent color."
                field="chartColor"
                value={design.chartColor()}
                onChange={(value) =>
                  design.setChartColor(
                    value as typeof design.chartColor extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={chartColorOptions()}
              />

              <SelectField
                title="Font"
                description="Applied to the preview body text through `--font-sans`."
                field="font"
                value={design.font()}
                onChange={(value) =>
                  design.setFont(value as typeof design.font extends () => infer T ? T : never)
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={FONTS.map((font) => ({ value: font.value, label: font.title }))}
              />

              <SelectField
                title="Heading Font"
                description="Controls `--font-heading` and can inherit from the body font."
                field="fontHeading"
                value={design.fontHeading()}
                onChange={(value) =>
                  design.setFontHeading(
                    value as typeof design.fontHeading extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={[
                  { value: "inherit", label: "Body Font" },
                  ...FONTS.map((font) => ({ value: font.value, label: font.title }))
                ]}
              />

              <SelectField
                title="Radius"
                description="Changes the shared radius token. Lyra forces square corners."
                field="radius"
                value={design.effectiveRadius()}
                onChange={(value) =>
                  design.setRadius(value as typeof design.radius extends () => infer T ? T : never)
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                disabled={design.style() === "lyra"}
                options={RADII.map((radius) => ({ value: radius.name, label: radius.label }))}
              />

              <SelectField
                title="Menu Accent"
                description="Adjusts how menu surfaces inherit the main accent color."
                field="menuAccent"
                value={design.menuAccent()}
                onChange={(value) =>
                  design.setMenuAccent(
                    value as typeof design.menuAccent extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                disabled={isTranslucentMenuColor(design.menuColor())}
                options={MENU_ACCENTS.map((accent) => ({
                  value: accent.value,
                  label: accent.label
                }))}
              />

              <SelectField
                title="Menu Color"
                description="Adds inverted or translucent menu treatments for supported examples."
                field="menuColor"
                value={design.menuColor()}
                onChange={(value) =>
                  design.setMenuColor(
                    value as typeof design.menuColor extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={MENU_COLORS.map((color) => ({ value: color.value, label: color.label }))}
              />

              <SelectField
                title="Icon Library"
                description="Only Solid-ready icon libraries are selectable locally."
                field="iconLibrary"
                value={design.iconLibrary()}
                onChange={(value) =>
                  design.setIconLibrary(
                    value as typeof design.iconLibrary extends () => infer T ? T : never
                  )
                }
                isLocked={isLocked}
                onToggleLock={toggleLock}
                options={iconLibraryOptions()}
              />
            </CardContent>
            <CardFooter class="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => copyToClipboardWithMeta(`--preset ${design.preset()}`)}
              >
                {`--preset ${design.preset()}`}
              </Button>
              <Button variant="outline" onClick={() => copyToClipboardWithMeta(shareUrl())}>
                Share
              </Button>
              <Button variant="outline" onClick={() => setShowResetDialog(true)}>
                Reset
              </Button>
              <Button disabled title="Create Project is still a placeholder in v1.">
                Create Project
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>

      <Dialog open={showExplorer()} onOpenChange={setShowExplorer}>
        <DialogContent class="max-w-2xl gap-4">
          <DialogHeader>
            <DialogTitle>Navigate previews</DialogTitle>
            <DialogDescription>Search through the available component examples.</DialogDescription>
          </DialogHeader>
          <Input
            value={itemSearch()}
            onInput={(event) => setItemSearch(event.currentTarget.value)}
            placeholder="Search examples"
          />
          <div class="max-h-[60svh] overflow-y-auto rounded-xl border p-2">
            <div class="grid gap-2 sm:grid-cols-2">
              <For each={filteredItems()}>
                {(item) => (
                  <Button
                    variant={design.item() === item.name ? "default" : "ghost"}
                    class="justify-start"
                    onClick={() => {
                      design.setItem(item.name)
                      setShowExplorer(false)
                    }}
                  >
                    {item.title}
                  </Button>
                )}
              </For>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showResetDialog()} onOpenChange={setShowResetDialog}>
        <DialogContent class="max-w-md">
          <DialogHeader>
            <DialogTitle>Reset current customization?</DialogTitle>
            <DialogDescription>
              This keeps the selected style and preview item, then restores the rest of the design
              system options to their defaults.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowResetDialog(false)}>
              Cancel
            </Button>
            <Button onClick={reset}>Reset</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={showWelcomeDialog()}
        onOpenChange={(open) => {
          setShowWelcomeDialog(open)
          if (!open) {
            try {
              window.localStorage.setItem(WELCOME_DIALOG_KEY, "true")
            } catch {
              // ignore storage write failures
            }
          }
        }}
      >
        <DialogContent class="max-w-lg gap-4">
          <DialogHeader>
            <DialogTitle>Build your own SolidUI</DialogTitle>
            <DialogDescription>
              This is the Solid port of shadcn create. It uses the same preset hash format, previews
              components inline without iframes, and is tailored to the local Kobalte registry.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowWelcomeDialog(false)}>Get Started</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ControlField(props: {
  title: string
  description: string
  field: string
  children: import("solid-js").JSX.Element
}) {
  return (
    <div class="space-y-2">
      <div>
        <div class="text-sm font-medium">{props.title}</div>
        <div class="text-xs text-muted-foreground">{props.description}</div>
      </div>
      {props.children}
    </div>
  )
}

function SelectField(props: {
  title: string
  description: string
  field: LockableField
  value: string
  disabled?: boolean
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  isLocked: (field: LockableField) => boolean
  onToggleLock: (field: LockableField) => void
}) {
  return (
    <div class="space-y-2">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="text-sm font-medium">{props.title}</div>
          <div class="text-xs text-muted-foreground">{props.description}</div>
        </div>
        <LockButton field={props.field} isLocked={props.isLocked} onToggle={props.onToggleLock} />
      </div>
      <NativeSelect
        class="w-full"
        value={props.value}
        disabled={props.disabled}
        onChange={(event) => props.onChange(event.currentTarget.value)}
      >
        <For each={props.options}>
          {(option) => <NativeSelectOption value={option.value}>{option.label}</NativeSelectOption>}
        </For>
      </NativeSelect>
    </div>
  )
}

export default function CreatePage() {
  const parsed = parseCreateSearchParams(new URLSearchParams(window.location.search))

  return (
    <DesignSystemProvider
      initialState={{
        style: parsed.state.style,
        baseColor: parsed.state.baseColor,
        themeName: parsed.state.themeName,
        chartColor: parsed.state.chartColor,
        iconLibrary: parsed.state.iconLibrary,
        font: parsed.state.font,
        fontHeading: parsed.state.fontHeading,
        radius: parsed.state.radius,
        menuAccent: parsed.state.menuAccent,
        menuColor: parsed.state.menuColor,
        item: parsed.state.item,
        preset: parsed.state.preset
      }}
      scope="memory"
    >
      <CreatePageContent />
    </DesignSystemProvider>
  )
}
