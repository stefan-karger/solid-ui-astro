import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "~/registry/ui/field"
import { Input } from "~/registry/ui/input"

export default function CollapsibleSettings() {
  const [open, setOpen] = createSignal(false)

  return (
    <Card class="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible class="flex items-start gap-2" onOpenChange={setOpen} open={open()}>
          <FieldGroup class="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel class="sr-only" for="radius-x">
                Radius X
              </FieldLabel>
              <Input id="radius-x" placeholder="0" />
            </Field>
            <Field>
              <FieldLabel class="sr-only" for="radius-y">
                Radius Y
              </FieldLabel>
              <Input id="radius-y" placeholder="0" />
            </Field>
            <CollapsibleContent class="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel class="sr-only" for="radius-top-left">
                  Radius Top Left
                </FieldLabel>
                <Input id="radius-top-left" placeholder="0" />
              </Field>
              <Field>
                <FieldLabel class="sr-only" for="radius-top-right">
                  Radius Top Right
                </FieldLabel>
                <Input id="radius-top-right" placeholder="0" />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger
            as={Button}
            class="group/collapsible-trigger w-auto shrink-0"
            size="icon"
            variant="outline"
          >
            <IconPlaceholder
              class="size-4 transition-transform group-data-[expanded]/collapsible-trigger:rotate-180"
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
            />
            <span class="sr-only">Toggle radius controls</span>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
