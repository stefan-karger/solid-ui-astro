import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/registry/ui/empty"

export default function EmptyBackground() {
  return (
    <Empty class="max-w-md bg-muted/50">
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          No results match your current filters. Try broadening your search or clearing filters.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Try again</Button>
        <Button as="a" class="text-muted-foreground" href="#" variant="link">
          Learn how search works
          <IconPlaceholder class="size-4" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" />
        </Button>
      </EmptyContent>
    </Empty>
  )
}
