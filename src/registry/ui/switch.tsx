import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SwitchPrimitive from "@kobalte/core/switch"
import { mergeProps, splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { cn } from "~/lib/utils"

type SwitchProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  SwitchPrimitive.SwitchRootProps<T>
> &
  Pick<ComponentProps<T>, "class"> & {
    size?: "sm" | "default"
  }

const Switch = <T extends ValidComponent = "div">(rawProps: SwitchProps<T>) => {
  const props = mergeProps({ size: "default" as const }, rawProps)
  const [local, others] = splitProps(props as SwitchProps, ["class", "size", "id"])

  return (
    <SwitchPrimitive.Root
      class={cn(
        "peer group/switch relative inline-flex items-center transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "cn-switch",
        local.class
      )}
      data-size={local.size}
      data-slot="switch"
      {...others}
    >
      <SwitchPrimitive.Input class="peer sr-only" data-slot="switch-input" id={local.id} />
      <SwitchPrimitive.Control
        class="relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors data-disabled:cursor-not-allowed"
        data-slot="switch-control"
      >
        <SwitchPrimitive.Thumb
          class="cn-switch-thumb pointer-events-none block ring-0"
          data-slot="switch-thumb"
        />
      </SwitchPrimitive.Control>
    </SwitchPrimitive.Root>
  )
}

export { Switch, type SwitchProps }
