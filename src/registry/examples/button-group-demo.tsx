import { Button } from "~/registry/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "~/registry/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button size="sm" variant="outline">
        Previous
      </Button>
      <Button size="sm" variant="outline">
        Today
      </Button>
      <ButtonGroupSeparator class="" />
      <Button size="sm" variant="outline">
        Next
      </Button>
    </ButtonGroup>
  )
}
