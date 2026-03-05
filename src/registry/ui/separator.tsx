import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SeparatorPrimitive from "@kobalte/core/separator"
import { mergeProps, splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { cn } from "~/lib/utils"

type SeparatorProps<T extends ValidComponent = "hr"> = PolymorphicProps<
  T,
  SeparatorPrimitive.SeparatorRootProps<T>
> &
  Pick<ComponentProps<T>, "class">

const Separator = <T extends ValidComponent = "hr">(props: SeparatorProps<T>) => {
  const mergedProps = mergeProps({ orientation: "horizontal" } as const, props)
  const [local, others] = splitProps(mergedProps as SeparatorProps, ["class"])
  return (
    <SeparatorPrimitive.Separator
      data-slot="separator"
      class={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        local.class
      )}
      {...others}
    />
  )
}

export { Separator, type SeparatorProps }
