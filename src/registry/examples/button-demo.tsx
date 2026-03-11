import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"

export default function ButtonDemo() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button>
        <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
        Search
      </Button>
    </div>
  )
}
