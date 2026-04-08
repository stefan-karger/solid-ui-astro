import { For } from "solid-js"

import { Card, CardContent } from "~/registry/ui/card"
import { Checkbox } from "~/registry/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle
} from "~/registry/ui/field"

const options = [
  { label: "Social Media", value: "social-media" },
  { label: "Search Engine", value: "search-engine" },
  { label: "Referral", value: "referral" },
  { label: "Other", value: "other" }
]

export default function FieldHear() {
  return (
    <Card class="py-4 shadow-none">
      <CardContent class="px-4">
        <form>
          <FieldGroup>
            <FieldSet class="gap-4">
              <FieldLegend>How did you hear about us?</FieldLegend>
              <FieldDescription class="line-clamp-1">
                Select the option that best describes how you heard about us.
              </FieldDescription>
              <FieldGroup class="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
                <For each={options}>
                  {(option) => (
                    <FieldLabel class="w-fit!" for={option.value}>
                      <Field
                        class="gap-1.5 overflow-hidden px-3! py-1.5! transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:px-2!"
                        orientation="horizontal"
                      >
                        <Checkbox
                          class="-ml-6 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ml-0 data-[state=checked]:translate-x-0"
                          defaultChecked={option.value === "social-media"}
                          id={option.value}
                          value={option.value}
                        />
                        <FieldTitle>{option.label}</FieldTitle>
                      </Field>
                    </FieldLabel>
                  )}
                </For>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
