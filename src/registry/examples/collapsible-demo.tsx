import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"

export default function CollapsibleDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <Collapsible class="w-full max-w-sm space-y-2" onOpenChange={setOpen} open={open()}>
      <div class="flex items-center justify-between gap-3 rounded-md border px-4 py-3">
        <h4 class="text-sm font-semibold">@zaidan-ui starred 3 repositories</h4>
        <CollapsibleTrigger class="size-8 shrink-0 justify-center rounded-md border hover:bg-muted">
          <IconPlaceholder
            class="size-4 transition-transform group-data-[expanded]/collapsible-trigger:rotate-180"
            lucide="ChevronsUpDownIcon"
            tabler="IconSelector"
          />
          <span class="sr-only">Toggle starred repositories</span>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">@kobalte/core</div>
      <CollapsibleContent class="space-y-2">
        <div class="rounded-md border px-4 py-3 font-mono text-sm">@solidjs/router</div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">@tanstack/solid-query</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
