import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
  type JSX
} from "solid-js"

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
import { useIsMobile } from "~/registry/hooks/use-mobile"
import { STYLES } from "~/registry/styles"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardFooter } from "~/registry/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "~/registry/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"
import { FieldGroup, FieldSeparator } from "~/registry/ui/field"
import { Input } from "~/registry/ui/input"

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

const PRESET_PREVIEW_ITEM_VALUES = new Set<string>(PRESET_PREVIEW_ITEMS.map((item) => item.value))
const BASE_COLOR_NAME_SET = new Set<string>(BASE_COLORS.map((baseColor) => baseColor.name))

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

type PickerOption = {
  value: string
  label: string
  indicator?: JSX.Element
  style?: JSX.CSSProperties
}

type PickerGroupDefinition = {
  label?: string
  options: PickerOption[]
}

function capitalizeLabel(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function getOptionLabel(
  options: readonly { value: string; label: string }[],
  value: string,
  fallback?: string
) {
  return (
    options.find((option) => option.value === value)?.label ?? fallback ?? formatItemTitle(value)
  )
}

function groupFontOptions(options: readonly PickerOption[]) {
  const groups = new Map<string, PickerOption[]>()

  for (const option of options) {
    const type =
      option.value === "inherit"
        ? "inherit"
        : FONTS.find((font) => font.value === option.value)?.type

    if (!type || type === "inherit") {
      continue
    }

    const existing = groups.get(type)
    if (existing) {
      existing.push(option)
      continue
    }

    groups.set(type, [option])
  }

  return Array.from(groups.entries()).map(([type, items]) => ({
    label: capitalizeLabel(type),
    options: items
  }))
}

function createThemeGroups(options: readonly PickerOption[]) {
  const baseThemes = options.filter((option) => BASE_COLOR_NAME_SET.has(option.value))
  const accentThemes = options.filter((option) => !BASE_COLOR_NAME_SET.has(option.value))

  return [{ options: baseThemes }, { options: accentThemes }].filter(
    (group) => group.options.length > 0
  )
}

function getBaseColorSwatch(baseColor: { cssVars: { dark: Record<string, string> } } | undefined) {
  return baseColor?.cssVars.dark["muted-foreground"]
}

function getThemeSwatch(
  theme: { name: string; cssVars: { dark: Record<string, string> } } | undefined
) {
  if (!theme) {
    return undefined
  }

  return theme.cssVars.dark[BASE_COLOR_NAME_SET.has(theme.name) ? "muted-foreground" : "primary"]
}

function LockGlyph(props: { locked: boolean }) {
  return (
    <svg
      aria-hidden="true"
      class="size-4"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <Show when={props.locked} fallback={<path d="M9 10V8a4 4 0 0 1 6.8-2.8M16 10V8" />}>
        <path d="M9 10V8a3 3 0 1 1 6 0v2" />
      </Show>
    </svg>
  )
}

function LockButton(props: {
  field: LockableField
  isLocked: (field: LockableField) => boolean
  onToggle: (field: LockableField) => void
}) {
  const locked = () => props.isLocked(props.field)

  return (
    <button
      type="button"
      title={locked() ? "Unlock" : "Lock"}
      aria-label={locked() ? "Unlock" : "Lock"}
      data-locked={locked()}
      class="absolute top-1/2 right-8 z-10 flex size-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded text-foreground opacity-0 ring-foreground/60 transition-opacity outline-none group-focus-within/picker:opacity-100 group-hover/picker:opacity-100 focus:opacity-100 focus-visible:ring-1 data-[locked=true]:opacity-100 pointer-coarse:hidden"
      onClick={() => props.onToggle(props.field)}
    >
      <LockGlyph locked={locked()} />
    </button>
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
    <div class="flex min-h-[240px] flex-1 flex-col gap-4 md:min-h-0">
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
          "relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden rounded-2xl ring ring-foreground/10 md:ring-muted dark:ring-foreground/10",
          documentDesign.theme() === DARK_THEME && "dark"
        )}
      >
        <div class="absolute inset-0 bg-muted dark:bg-muted/30" />
        <div
          ref={previewRef}
          class={cn(
            "relative z-10 min-h-[420px] flex-1 rounded-2xl border bg-background shadow-sm",
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
  const isMobile = useIsMobile()
  const [locks, setLocks] = createSignal<Set<LockableField>>(new Set())
  const [historyEntries, setHistoryEntries] = createSignal<string[]>([])
  const [historyIndex, setHistoryIndex] = createSignal(-1)
  const [urlSearch, setUrlSearch] = createSignal("")
  const [itemSearch, setItemSearch] = createSignal("")
  const [showResetDialog, setShowResetDialog] = createSignal(false)
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
  const styleOptions = createMemo<PickerOption[]>(() =>
    STYLES.map((style) => ({
      value: style.name,
      label: style.title,
      indicator: <div class="*:[svg]:size-4 *:[svg]:text-foreground!">{style.icon}</div>
    }))
  )
  const currentStyle = createMemo(() => STYLES.find((style) => style.name === design.style()))
  const currentBaseColor = createMemo(() =>
    BASE_COLORS.find((baseColor) => baseColor.name === design.baseColor())
  )
  const currentTheme = createMemo(() =>
    getThemesForBaseColor(design.baseColor()).find((theme) => theme.name === design.themeName())
  )
  const currentChartColor = createMemo(() =>
    getThemesForBaseColor(design.baseColor()).find((theme) => theme.name === design.chartColor())
  )
  const currentFont = createMemo(() => FONTS.find((font) => font.value === design.font()))
  const currentHeadingFont = createMemo(() => {
    const fontHeading = design.fontHeading()

    if (fontHeading === "inherit") {
      return currentFont()
    }

    return FONTS.find((font) => font.value === fontHeading)
  })
  const styleGroups = createMemo<PickerGroupDefinition[]>(() => [{ options: styleOptions() }])
  const baseColorGroups = createMemo<PickerGroupDefinition[]>(() => [
    {
      options: baseColorOptions().map((option) => ({ value: option.value, label: option.label }))
    }
  ])
  const themeGroups = createMemo<PickerGroupDefinition[]>(() =>
    createThemeGroups(
      themeOptions().map((option) => ({ value: option.value, label: option.label }))
    )
  )
  const chartColorGroups = createMemo<PickerGroupDefinition[]>(() =>
    createThemeGroups(
      chartColorOptions().map((option) => ({ value: option.value, label: option.label }))
    )
  )
  const fontGroups = createMemo<PickerGroupDefinition[]>(() =>
    groupFontOptions(
      FONTS.map((font) => ({
        value: font.value,
        label: font.title,
        style: { "font-family": font.family }
      }))
    )
  )
  const headingFontGroups = createMemo<PickerGroupDefinition[]>(() => {
    const inheritLabel = currentFont()?.title ?? "Body Font"

    return [
      {
        options: [
          {
            value: "inherit",
            label: inheritLabel,
            style: currentFont()?.family ? { "font-family": currentFont()?.family } : undefined
          }
        ]
      },
      ...groupFontOptions(
        FONTS.map((font) => ({
          value: font.value,
          label: font.title,
          style: { "font-family": font.family }
        }))
      )
    ]
  })
  const radiusGroups = createMemo<PickerGroupDefinition[]>(() => [
    { options: RADII.map((radius) => ({ value: radius.name, label: radius.label })) }
  ])
  const menuAccentGroups = createMemo<PickerGroupDefinition[]>(() => [
    { options: MENU_ACCENTS.map((accent) => ({ value: accent.value, label: accent.label })) }
  ])
  const menuColorGroups = createMemo<PickerGroupDefinition[]>(() => [
    { options: MENU_COLORS.map((color) => ({ value: color.value, label: color.label })) }
  ])
  const iconLibraryGroups = createMemo<PickerGroupDefinition[]>(() => [
    {
      options: iconLibraryOptions().map((option) => ({ value: option.value, label: option.label }))
    }
  ])

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
    const existingIndex = historyEntries().indexOf(value)

    if (existingIndex >= 0) {
      setHistoryIndex(existingIndex)
      return
    }

    setHistoryEntries((current) => {
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
      <div class="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden section-soft [--customizer-width:--spacing(48)] [--gap:--spacing(4)] md:[--gap:--spacing(6)] 2xl:[--customizer-width:--spacing(56)]">
        <div
          data-slot="designer"
          class="flex min-h-0 flex-1 flex-col gap-(--gap) p-(--gap) pt-[calc(var(--gap)*0.25)] md:flex-row-reverse"
        >
          <CreatePreviewSurface />

          <aside class="w-full md:w-(--customizer-width)">
            <Card class="dark isolate z-10 max-h-full min-h-0 w-full self-start rounded-2xl border-0 bg-card/90 shadow-xl ring-1 ring-white/10 backdrop-blur-xl">
              <CardContent class="no-scrollbar min-h-0 flex-1 overflow-x-auto overflow-y-hidden px-3 py-3 md:overflow-y-auto md:px-4 md:py-4">
                <FieldGroup class="flex-row gap-2.5 py-px **:data-[slot=field-separator]:-mx-4 **:data-[slot=field-separator]:w-auto md:flex-col md:gap-3.25">
                  <PickerField
                    label="Style"
                    field="style"
                    value={design.style()}
                    valueLabel={currentStyle()?.title ?? formatItemTitle(design.style())}
                    groups={styleGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <div class="*:[svg]:size-4 *:[svg]:text-foreground!">
                        {currentStyle()?.icon}
                      </div>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setStyle(
                        value as typeof design.style extends () => infer T ? T : never
                      )
                    }
                  />
                  <FieldSeparator class="hidden md:block" />
                  <PickerField
                    label="Base Color"
                    field="baseColor"
                    value={design.baseColor()}
                    valueLabel={getOptionLabel(
                      baseColorGroups()[0]?.options ?? [],
                      design.baseColor()
                    )}
                    groups={baseColorGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <Show when={currentBaseColor()}>
                        {(baseColor) => (
                          <div
                            class="size-4 rounded-full"
                            style={{ "background-color": getBaseColorSwatch(baseColor()) }}
                          />
                        )}
                      </Show>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setBaseColor(
                        value as typeof design.baseColor extends () => infer T ? T : never
                      )
                    }
                  />
                  <PickerField
                    label="Theme"
                    field="themeName"
                    value={design.themeName()}
                    valueLabel={getOptionLabel(
                      themeOptions(),
                      design.themeName(),
                      LEGACY_OPTION_LABELS.gray
                    )}
                    groups={themeGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <Show when={currentTheme()}>
                        {(theme) => (
                          <div
                            class="size-4 rounded-full"
                            style={{ "background-color": getThemeSwatch(theme()) }}
                          />
                        )}
                      </Show>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setThemeName(
                        value as typeof design.themeName extends () => infer T ? T : never
                      )
                    }
                  />
                  <PickerField
                    label="Chart Color"
                    field="chartColor"
                    value={design.chartColor()}
                    valueLabel={getOptionLabel(
                      chartColorOptions(),
                      design.chartColor(),
                      LEGACY_OPTION_LABELS.gray
                    )}
                    groups={chartColorGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <Show when={currentChartColor()}>
                        {(theme) => (
                          <div
                            class="size-4 rounded-full"
                            style={{ "background-color": getThemeSwatch(theme()) }}
                          />
                        )}
                      </Show>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setChartColor(
                        value as typeof design.chartColor extends () => infer T ? T : never
                      )
                    }
                  />
                  <FieldSeparator class="hidden md:block" />
                  <PickerField
                    label="Heading"
                    field="fontHeading"
                    value={design.fontHeading()}
                    valueLabel={
                      design.fontHeading() === "inherit"
                        ? (currentFont()?.title ?? "Body Font")
                        : (currentHeadingFont()?.title ?? "Body Font")
                    }
                    groups={headingFontGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <div
                        class="text-base font-medium"
                        style={{
                          "font-family": currentHeadingFont()?.family ?? currentFont()?.family
                        }}
                      >
                        Aa
                      </div>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setFontHeading(
                        value as typeof design.fontHeading extends () => infer T ? T : never
                      )
                    }
                  />
                  <PickerField
                    label="Font"
                    field="font"
                    value={design.font()}
                    valueLabel={currentFont()?.title ?? formatItemTitle(design.font())}
                    groups={fontGroups()}
                    isMobile={isMobile()}
                    indicator={
                      <div
                        class="text-base font-medium"
                        style={{ "font-family": currentFont()?.family }}
                      >
                        Aa
                      </div>
                    }
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setFont(value as typeof design.font extends () => infer T ? T : never)
                    }
                  />
                  <FieldSeparator class="hidden md:block" />
                  <PickerField
                    label="Icon Library"
                    field="iconLibrary"
                    value={design.iconLibrary()}
                    valueLabel={getOptionLabel(
                      iconLibraryGroups()[0]?.options ?? [],
                      design.iconLibrary(),
                      LEGACY_OPTION_LABELS[
                        design.iconLibrary() as keyof typeof LEGACY_OPTION_LABELS
                      ]
                    )}
                    groups={iconLibraryGroups()}
                    isMobile={isMobile()}
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setIconLibrary(
                        value as typeof design.iconLibrary extends () => infer T ? T : never
                      )
                    }
                  />
                  <PickerField
                    label="Radius"
                    field="radius"
                    value={design.effectiveRadius()}
                    valueLabel={getOptionLabel(
                      radiusGroups()[0]?.options ?? [],
                      design.effectiveRadius()
                    )}
                    groups={radiusGroups()}
                    isMobile={isMobile()}
                    disabled={design.style() === "lyra"}
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setRadius(
                        value as typeof design.radius extends () => infer T ? T : never
                      )
                    }
                  />
                  <FieldSeparator class="hidden md:block" />
                  <PickerField
                    label="Menu Color"
                    field="menuColor"
                    value={design.menuColor()}
                    valueLabel={getOptionLabel(
                      menuColorGroups()[0]?.options ?? [],
                      design.menuColor()
                    )}
                    groups={menuColorGroups()}
                    isMobile={isMobile()}
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setMenuColor(
                        value as typeof design.menuColor extends () => infer T ? T : never
                      )
                    }
                  />
                  <PickerField
                    label="Menu Accent"
                    field="menuAccent"
                    value={design.menuAccent()}
                    valueLabel={getOptionLabel(
                      menuAccentGroups()[0]?.options ?? [],
                      design.menuAccent()
                    )}
                    groups={menuAccentGroups()}
                    isMobile={isMobile()}
                    disabled={isTranslucentMenuColor(design.menuColor())}
                    isLocked={isLocked}
                    onToggleLock={toggleLock}
                    onChange={(value) =>
                      design.setMenuAccent(
                        value as typeof design.menuAccent extends () => infer T ? T : never
                      )
                    }
                  />
                </FieldGroup>
              </CardContent>
              <CardFooter class="grid min-w-0 grid-cols-2 gap-2 px-3 pb-3 md:grid-cols-1 md:px-4 md:pb-4">
                <Button
                  variant="outline"
                  class="touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted! pointer-coarse:h-10!"
                  onClick={() => copyToClipboardWithMeta(`--preset ${design.preset()}`)}
                >
                  <span class="w-full truncate text-center font-medium">{`--preset ${design.preset()}`}</span>
                </Button>
                <Button
                  variant="outline"
                  class="touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted! pointer-coarse:h-10!"
                  onClick={() => setShowExplorer(true)}
                >
                  <span class="w-full text-center font-medium">Open</span>
                </Button>
                <Button
                  variant="outline"
                  class="touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted! pointer-coarse:h-10!"
                  onClick={randomize}
                >
                  <span class="w-full text-center font-medium">Shuffle</span>
                </Button>
                <Button
                  variant="outline"
                  class="touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted! pointer-coarse:h-10!"
                  onClick={() => setShowResetDialog(true)}
                >
                  <span class="w-full text-center font-medium">Reset</span>
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </div>
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
    </>
  )
}

function PickerField(props: {
  label: string
  field: LockableField
  value: string
  valueLabel: string
  disabled?: boolean
  indicator?: JSX.Element
  groups: readonly PickerGroupDefinition[]
  isMobile: boolean
  onChange: (value: string) => void
  isLocked: (field: LockableField) => boolean
  onToggleLock: (field: LockableField) => void
}) {
  return (
    <div class="group/picker relative">
      <DropdownMenu placement={props.isMobile ? "top-start" : "right-start"} gutter={20}>
        <DropdownMenuTrigger
          disabled={props.disabled}
          class={cn(
            "relative w-36 shrink-0 touch-manipulation rounded-xl p-3 text-left ring-1 ring-foreground/10 select-none hover:bg-muted focus-visible:ring-foreground/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-expanded:bg-muted md:w-full md:rounded-lg md:px-2.5 md:py-2",
            props.indicator && "pr-12 md:pr-10"
          )}
        >
          <div class="flex min-w-0 flex-col justify-start text-left">
            <div class="text-xs text-muted-foreground">{props.label}</div>
            <div class="line-clamp-1 truncate text-sm font-medium text-foreground">
              {props.valueLabel}
            </div>
          </div>
          <Show when={props.indicator}>
            <div class="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center text-foreground select-none md:right-2.5">
              {props.indicator}
            </div>
          </Show>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="dark w-[calc(min(100vw-2rem,13rem))] min-w-32 rounded-xl border-0 bg-neutral-950/85 p-1.5 text-neutral-100 shadow-2xl ring-1 ring-neutral-900/80 backdrop-blur-xl outline-none md:w-52">
          <DropdownMenuRadioGroup value={props.value} onChange={props.onChange}>
            <For each={props.groups}>
              {(group, index) => (
                <>
                  <Show when={index() > 0}>
                    <DropdownMenuSeparator class="-mx-1.5 my-1.5 bg-neutral-700/70" />
                  </Show>
                  <Show when={group.label}>
                    <DropdownMenuLabel class="px-2 py-1.5 text-xs font-medium text-neutral-400">
                      {group.label}
                    </DropdownMenuLabel>
                  </Show>
                  <DropdownMenuGroup>
                    <For each={group.options}>
                      {(option) => (
                        <DropdownMenuRadioItem
                          class="gap-2 rounded-lg px-2 py-1.5 pr-8 text-sm font-medium text-neutral-100 outline-none focus:bg-neutral-700/80 focus:text-neutral-100 pointer-coarse:gap-3 pointer-coarse:py-2.5 pointer-coarse:text-base"
                          value={option.value}
                        >
                          <span class="truncate" style={option.style}>
                            {option.label}
                          </span>
                        </DropdownMenuRadioItem>
                      )}
                    </For>
                  </DropdownMenuGroup>
                </>
              )}
            </For>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <LockButton field={props.field} isLocked={props.isLocked} onToggle={props.onToggleLock} />
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
