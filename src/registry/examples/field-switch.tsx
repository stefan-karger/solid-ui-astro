import * as SwitchPrimitive from "@kobalte/core/switch"
import { splitProps, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"
import { Field, FieldContent, FieldDescription, FieldLabel } from "~/registry/ui/field"

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>

const Switch = (props: SwitchProps) => {
  const [local, others] = splitProps(props, ["class", "id"])

  return (
    <SwitchPrimitive.Root
      class={cn(
        "peer group/switch relative inline-flex items-center transition-all outline-none",
        "cn-switch data-disabled:cursor-not-allowed data-disabled:opacity-50",
        local.class
      )}
      data-size="default"
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

export default function FieldSwitch() {
  return (
    <div class="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel for="field-switch-2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use
            a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="field-switch-2fa" />
      </Field>
    </div>
  )
}
