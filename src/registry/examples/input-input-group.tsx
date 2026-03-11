import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "~/registry/ui/input-group"

export default function InputInputGroup() {
  return (
    <div class="grid w-full max-w-lg gap-3">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" type="text" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search docs..." type="search" />
      </InputGroup>
    </div>
  )
}
