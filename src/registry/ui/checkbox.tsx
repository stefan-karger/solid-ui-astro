import * as CheckboxPrimitive from "@kobalte/core/checkbox"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import { splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { cn } from "~/lib/utils"

type CheckboxProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  Omit<CheckboxPrimitive.CheckboxRootProps<T>, "children">
> &
  Pick<ComponentProps<T>, "class"> & {
    "aria-invalid"?: ComponentProps<"div">["aria-invalid"]
  }

const Checkbox = <T extends ValidComponent = "div">(props: CheckboxProps<T>) => {
  const [local, others] = splitProps(props as CheckboxProps, ["class", "aria-invalid"])

  return (
    <CheckboxPrimitive.Root data-slot="checkbox-root" {...others}>
      <CheckboxPrimitive.Input data-slot="checkbox-input" />
      <CheckboxPrimitive.Control
        aria-invalid={local["aria-invalid"]}
        class={cn("cn-checkbox", local.class)}
        data-slot="checkbox"
      >
        <CheckboxPrimitive.Indicator class="cn-checkbox-indicator" data-slot="checkbox-indicator">
          <IconPlaceholder lucide="CheckIcon" tabler="IconCheck" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, type CheckboxProps }
