import { For } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"

const sections = [
  {
    title: "General settings",
    description: "Control default workspace behavior and discoverability.",
    options: ["Show onboarding tips", "Automatically save drafts", "Enable command hints"],
    defaultOpen: true
  },
  {
    title: "Notifications",
    description: "Choose how and when updates are delivered.",
    options: ["Weekly digest", "Mentions and replies", "Release announcements"],
    defaultOpen: false
  }
]

export default function CollapsibleSettings() {
  return (
    <div class="w-full max-w-md space-y-3">
      <For each={sections}>
        {(section) => (
          <Collapsible class="rounded-lg border bg-card" defaultOpen={section.defaultOpen}>
            <CollapsibleTrigger class="px-4 py-3 text-left hover:bg-muted/40">
              <div class="space-y-1">
                <h4 class="text-sm font-medium">{section.title}</h4>
                <p class="text-xs text-muted-foreground">{section.description}</p>
              </div>
              <IconPlaceholder
                class="size-4 shrink-0 text-muted-foreground transition-transform group-data-[expanded]/collapsible-trigger:rotate-180"
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
              />
            </CollapsibleTrigger>
            <CollapsibleContent class="px-4 pb-4">
              <ul class="space-y-2 text-sm text-muted-foreground">
                <For each={section.options}>
                  {(option) => (
                    <li class="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-2">
                      <span class="size-1.5 rounded-full bg-primary" />
                      <span>{option}</span>
                    </li>
                  )}
                </For>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}
      </For>
    </div>
  )
}
