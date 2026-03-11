import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"

export default function ButtonRounded() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button class="rounded-full" size="sm">
        Rounded
      </Button>
      <Button class="rounded-full" variant="secondary">
        Rounded Secondary
      </Button>
      <Button class="rounded-full" size="icon" variant="outline">
        <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
        <span class="sr-only">Search</span>
      </Button>
    </div>
  )
}
