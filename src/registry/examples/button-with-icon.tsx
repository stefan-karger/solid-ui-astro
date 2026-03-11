import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"

export default function ButtonWithIcon() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button>
        <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
        Search
      </Button>
      <Button variant="outline">
        Continue
        <IconPlaceholder class="size-4" lucide="ChevronRightIcon" tabler="IconChevronRight" />
      </Button>
    </div>
  )
}
