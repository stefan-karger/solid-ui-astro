import { Item, ItemIndicator, ItemInput, RadioGroup } from "@kobalte/core/radio-group"
import { splitProps, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle
} from "~/registry/ui/field"

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

export default function FieldChoiceCard() {
  return (
    <div class="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel for="field-choice-card-environment">Compute Environment</FieldLabel>
          <FieldDescription>Select the compute environment for your cluster.</FieldDescription>
          <RadioGroup
            class="cn-radio-group w-full"
            defaultValue="kubernetes"
            data-slot="radio-group"
          >
            <FieldLabel for="field-choice-kubernetes">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>Run GPU workloads on a Kubernetes cluster.</FieldDescription>
                </FieldContent>
                <RadioItem id="field-choice-kubernetes" value="kubernetes" />
              </Field>
            </FieldLabel>
            <FieldLabel for="field-choice-vm">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>Use a VM cluster to run GPU workloads.</FieldDescription>
                </FieldContent>
                <RadioItem id="field-choice-vm" value="vm" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
