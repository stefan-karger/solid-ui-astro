import { Item, ItemIndicator, ItemInput, RadioGroup } from "@kobalte/core/radio-group"
import { splitProps, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"
import { Field, FieldDescription, FieldLabel, FieldSet } from "~/registry/ui/field"

type RadioItemProps = ComponentProps<typeof Item>

const RadioItem = (props: RadioItemProps) => {
  const [local, others] = splitProps(props, ["class", "id"])

  return (
    <Item
      class={cn(
        "group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2",
        "cn-radio-group-item data-disabled:cursor-not-allowed data-disabled:opacity-50",
        local.class
      )}
      data-slot="radio-group-item"
      {...others}
    >
      <ItemInput class="peer sr-only" data-slot="radio-group-item-input" id={local.id} />
      <ItemIndicator class="cn-radio-group-indicator" data-slot="radio-group-indicator">
        <span class="cn-radio-group-indicator-icon rounded-full bg-current" />
      </ItemIndicator>
    </Item>
  )
}

export default function FieldRadio() {
  return (
    <div class="w-full max-w-md">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <RadioGroup class="cn-radio-group w-full" defaultValue="monthly" data-slot="radio-group">
          <Field orientation="horizontal">
            <RadioItem id="field-radio-monthly" value="monthly" />
            <FieldLabel class="font-normal" for="field-radio-monthly">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioItem id="field-radio-yearly" value="yearly" />
            <FieldLabel class="font-normal" for="field-radio-yearly">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioItem id="field-radio-lifetime" value="lifetime" />
            <FieldLabel class="font-normal" for="field-radio-lifetime">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
