import { createSignal, onMount, type Accessor } from "solid-js"

import { iconLibraries, type IconLibraryName } from "~/registry/icon-libraries"
import { STYLES, type Style } from "~/registry/styles"

type DesignSystemState = {
  style: Accessor<Style>
  setStyle: (value: Style) => void
  iconLibrary: Accessor<IconLibraryName>
  setIconLibrary: (value: IconLibraryName) => void
}

export function useDesignSystem(): DesignSystemState {
  const [style, rawSetStyle] = createSignal<Style>(STYLES[0])
  const [iconLibrary, rawSetIconLibrary] = createSignal<IconLibraryName>("lucide")

  onMount(() => {
    const body = document.body

    const styleClass = [...body.classList].find((cls) => cls.startsWith("style-"))
    const styleName = styleClass?.replace("style-", "")
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
      if (cls.startsWith("style-")) {
        body.classList.remove(cls)
      }
    })
    body.classList.add(`style-${value.name}`)
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
