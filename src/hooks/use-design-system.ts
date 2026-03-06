import { createSignal, onMount, type Accessor } from "solid-js"

import { iconLibraries, type IconLibraryName } from "~/registry/icon-libraries"
import { STYLES, type Style } from "~/registry/styles"

export const LIGHT_THEME = "light"
export const DARK_THEME = "dark"
export const THEME_DARK_CLASS = "dark"
export type ThemeName = typeof LIGHT_THEME | typeof DARK_THEME

export const DEFAULT_STYLE_NAME = "nova"
export const DEFAULT_ICON_LIBRARY = "lucide"
export const STYLE_CLASS_PREFIX = "style-"
export const STORAGE_KEYS = {
  style: "docs:style",
  iconLibrary: "docs:icon-library",
  theme: "docs:theme"
} as const

type DesignSystemState = {
  style: Accessor<Style>
  setStyle: (value: Style) => void
  iconLibrary: Accessor<IconLibraryName>
  setIconLibrary: (value: IconLibraryName) => void
  theme: Accessor<ThemeName>
  setTheme: (value: ThemeName) => void
  toggleTheme: () => void
}

export function useDesignSystem(): DesignSystemState {
  const [style, rawSetStyle] = createSignal<Style>(
    STYLES.find((entry) => entry.name === DEFAULT_STYLE_NAME) ?? STYLES[0]
  )
  const [iconLibrary, rawSetIconLibrary] = createSignal<IconLibraryName>(DEFAULT_ICON_LIBRARY)
  const [theme, rawSetTheme] = createSignal<ThemeName>(LIGHT_THEME)

  onMount(() => {
    const root = document.documentElement

    const styleClass = [...root.classList].find((cls) => cls.startsWith(STYLE_CLASS_PREFIX))
    const styleName = styleClass?.replace(STYLE_CLASS_PREFIX, "")
    const initialStyle = STYLES.find((entry) => entry.name === styleName)

    if (initialStyle) {
      rawSetStyle(initialStyle)
    }

    const initialIconLibrary = root.dataset.iconLibrary

    if (initialIconLibrary && initialIconLibrary in iconLibraries) {
      rawSetIconLibrary(initialIconLibrary as IconLibraryName)
    }

    const initialTheme = root.classList.contains(THEME_DARK_CLASS) ? DARK_THEME : LIGHT_THEME
    rawSetTheme(initialTheme)
  })

  const setStyle = (value: Style) => {
    rawSetStyle(value)

    const root = document.documentElement
    root.classList.forEach((cls) => {
      if (cls.startsWith(STYLE_CLASS_PREFIX)) {
        root.classList.remove(cls)
      }
    })
    root.classList.add(`${STYLE_CLASS_PREFIX}${value.name}`)

    try {
      window.localStorage.setItem(STORAGE_KEYS.style, value.name)
    } catch {
      // don't do anything
    }
  }

  const setIconLibrary = (value: IconLibraryName) => {
    rawSetIconLibrary(value)

    const root = document.documentElement
    root.dataset.iconLibrary = value

    try {
      window.localStorage.setItem(STORAGE_KEYS.iconLibrary, value)
    } catch {
      // don't do anything
    }
  }

  const setTheme = (value: ThemeName) => {
    rawSetTheme(value)

    const root = document.documentElement
    root.classList.toggle(THEME_DARK_CLASS, value === DARK_THEME)

    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, value)
    } catch {
      // don't do anything
    }
  }

  const toggleTheme = () => {
    setTheme(theme() === DARK_THEME ? LIGHT_THEME : DARK_THEME)
  }

  return {
    style,
    setStyle,
    iconLibrary,
    setIconLibrary,
    theme,
    setTheme,
    toggleTheme
  }
}
