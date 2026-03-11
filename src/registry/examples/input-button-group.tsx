import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"
import { Input } from "~/registry/ui/input"

export default function InputButtonGroup() {
  return (
    <div class="grid w-full max-w-lg gap-3">
      <ButtonGroup class="w-full">
        <Input placeholder="Search the docs" type="search" />
        <Button type="button">Search</Button>
      </ButtonGroup>
      <ButtonGroup class="w-full">
        <Input placeholder="Project name" type="text" />
        <Button type="button" variant="outline">
          Save
        </Button>
      </ButtonGroup>
    </div>
  )
}
