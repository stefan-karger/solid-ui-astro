import { IconPlaceholder } from "~/components/icon-placeholder"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"

export default function InputGroupInlineStart() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <label class="text-sm font-medium" for="inline-start-input">
        Input
      </label>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <IconPlaceholder
            class="size-4 text-muted-foreground"
            lucide="SearchIcon"
            tabler="IconSearch"
          />
        </InputGroupAddon>
      </InputGroup>
      <p class="text-sm text-muted-foreground">Icon positioned at the start.</p>
    </div>
  )
}
