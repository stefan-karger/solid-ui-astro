import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea
} from "~/registry/ui/input-group"
import { Spinner } from "~/registry/ui/spinner"

export default function SpinnerInputGroup() {
  return (
    <div class="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput disabled placeholder="Send a message..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea disabled placeholder="Send a message..." />
        <InputGroupAddon align="block-end">
          <Spinner />
          Validating...
          <InputGroupButton class="ml-auto" variant="default">
            <IconPlaceholder class="size-4" lucide="ArrowUpIcon" tabler="IconArrowUp" />
            <span class="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
