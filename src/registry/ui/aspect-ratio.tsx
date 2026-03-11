import { splitProps, type ComponentProps, type JSX } from "solid-js"

import { cn } from "~/lib/utils"

type AspectRatioProps = ComponentProps<"div"> & {
  ratio?: number
}

const AspectRatio = (props: AspectRatioProps) => {
  const [local, others] = splitProps(props, ["class", "ratio", "style"])

  const mergedStyle = () => {
    const ratio = local.ratio ?? 16 / 9

    if (typeof local.style === "string") {
      return `aspect-ratio: ${ratio}; ${local.style}`
    }

    return {
      "aspect-ratio": String(ratio),
      ...(local.style as JSX.CSSProperties | undefined)
    }
  }

  return (
    <div
      data-slot="aspect-ratio"
      class={cn("cn-aspect-ratio relative w-full", local.class)}
      style={mergedStyle()}
      {...others}
    />
  )
}

export { AspectRatio, type AspectRatioProps }
