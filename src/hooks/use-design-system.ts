import { createSignal, onMount, type Accessor } from "solid-js"

import {
  DEFAULT_ICON_LIBRARY,
  DEFAULT_STYLE_NAME,
  STYLE_CLASS_PREFIX
} from "~/lib/design-system-defaults"
import { iconLibraries, type IconLibraryName } from "~/registry/icon-libraries"
import { STYLES, type Style } from "~/registry/styles"

type DesignSystemState = {
  style: Accessor<Style>
  setStyle: (value: Style) => void
  iconLibrary: Accessor<IconLibraryName>
  setIconLibrary: (value: IconLibraryName) => void
}

export function useDesignSystem(): DesignSystemState {
  const defaultStyle = STYLES.find((entry) => entry.name === DEFAULT_STYLE_NAME) ?? STYLES[0]
  const [style, rawSetStyle] = createSignal<Style>(defaultStyle)
  const [iconLibrary, rawSetIconLibrary] = createSignal<IconLibraryName>(DEFAULT_ICON_LIBRARY)

  onMount(() => {
    const body = document.body

    const styleClass = [...body.classList].find((cls) => cls.startsWith(STYLE_CLASS_PREFIX))
    const styleName = styleClass?.replace(STYLE_CLASS_PREFIX, "")
    const initialStyle = STYLES.find((entry) => entry.name === styleName)

    if (initialStyle) {
      rawSetStyle(initialStyle)
    }

    const initialIconLibrary = body.dataset.iconLibrary

    if (initialIconLibrary && initialIconLibrary in iconLibraries) {
      rawSetIconLibrary(initialIconLibrary as IconLibraryName)
    }
  })

  const setStyle = (value: Style) => {
    rawSetStyle(value)

    const body = document.body
    body.classList.forEach((cls) => {
      if (cls.startsWith(STYLE_CLASS_PREFIX)) {
        body.classList.remove(cls)
      }
    })
    body.classList.add(`${STYLE_CLASS_PREFIX}${value.name}`)
  }

  const setIconLibrary = (value: IconLibraryName) => {
    rawSetIconLibrary(value)

    const body = document.body
    body.dataset.iconLibrary = value
  }

  return {
    style,
    setStyle,
    iconLibrary,
    setIconLibrary
  }
}
