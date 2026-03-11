import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"

export default function ButtonIcon() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" variant="outline">
        <IconPlaceholder class="size-3.5" lucide="SearchIcon" tabler="IconSearch" />
        <span class="sr-only">Search</span>
      </Button>
      <Button size="icon" variant="secondary">
        <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
        <span class="sr-only">Search</span>
      </Button>
      <Button size="icon-lg">
        <IconPlaceholder class="size-5" lucide="SearchIcon" tabler="IconSearch" />
        <span class="sr-only">Search</span>
      </Button>
    </div>
  )
}
