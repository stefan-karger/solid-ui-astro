import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "~/registry/ui/empty"

export default function EmptyOutline() {
  return (
    <Empty class="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconPlaceholder class="size-4" lucide="CircleDashedIcon" tabler="IconCircleDashed" />
        </EmptyMedia>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>
          This space is ready for content. Add your first item to populate this section.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Add first item</Button>
      </EmptyContent>
    </Empty>
  )
}
