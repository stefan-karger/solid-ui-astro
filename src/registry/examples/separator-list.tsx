import { For } from "solid-js"

import { Separator } from "~/registry/ui/separator"

const releases = [
  {
    version: "v1.2.0",
    date: "Mar 10, 2026",
    notes: "Added command groups and refined keyboard focus states."
  },
  {
    version: "v1.1.3",
    date: "Feb 27, 2026",
    notes: "Improved combobox filtering performance for large lists."
  },
  {
    version: "v1.1.0",
    date: "Feb 14, 2026",
    notes: "Introduced input-group addons and textarea integration."
  }
]

export default function SeparatorList() {
  return (
    <ul class="w-full max-w-md rounded-md border">
      <For each={releases}>
        {(release, index) => (
          <>
            <li class="space-y-1 px-4 py-3">
              <div class="flex items-center justify-between gap-3">
                <span class="font-medium">{release.version}</span>
                <span class="text-xs text-muted-foreground">{release.date}</span>
              </div>
              <p class="text-sm text-muted-foreground">{release.notes}</p>
            </li>
            <Separator class={index() === releases.length - 1 ? "hidden" : undefined} />
          </>
        )}
      </For>
    </ul>
  )
}
