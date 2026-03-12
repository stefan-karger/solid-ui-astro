import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup aria-label="Media controls" class="h-fit" orientation="vertical">
      <Button size="icon" variant="outline">
        <IconPlaceholder class="size-4" lucide="PlusIcon" tabler="IconPlus" />
      </Button>
      <Button size="icon" variant="outline">
        <IconPlaceholder class="size-4" lucide="MinusIcon" tabler="IconMinus" />
      </Button>
    </ButtonGroup>
  )
}
