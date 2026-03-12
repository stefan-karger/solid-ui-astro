import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"
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
          <div class="grid w-full grid-cols-2 gap-2">
            <Input aria-label="Radius X" placeholder="0" value="0" />
            <Input aria-label="Radius Y" placeholder="0" value="0" />
            <CollapsibleContent class="col-span-full grid grid-cols-subgrid gap-2">
              <Input aria-label="Radius Top Left" placeholder="0" value="0" />
              <Input aria-label="Radius Top Right" placeholder="0" value="0" />
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger as={Button} class="shrink-0" size="icon" variant="outline">
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
