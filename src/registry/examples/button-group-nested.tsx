import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"

export default function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          1
        </Button>
        <Button size="sm" variant="outline">
          2
        </Button>
        <Button size="sm" variant="outline">
          3
        </Button>
        <Button size="sm" variant="outline">
          4
        </Button>
        <Button size="sm" variant="outline">
          5
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button aria-label="Previous" size="icon-sm" variant="outline">
          <IconPlaceholder class="size-4" lucide="ArrowLeftIcon" tabler="IconArrowLeft" />
        </Button>
        <Button aria-label="Next" size="icon-sm" variant="outline">
          <IconPlaceholder class="size-4" lucide="ArrowRightIcon" tabler="IconArrowRight" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
