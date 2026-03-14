import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/registry/ui/empty"

export default function EmptyDemo() {
  return (
    <Empty class="max-w-md">
      <EmptyHeader>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div class="flex flex-wrap items-center justify-center gap-2">
          <Button>Create project</Button>
          <Button variant="outline">Import project</Button>
        </div>
        <Button as="a" class="text-muted-foreground" href="#" variant="link">
          Learn more
          <IconPlaceholder class="size-4" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" />
        </Button>
      </EmptyContent>
    </Empty>
  )
}
