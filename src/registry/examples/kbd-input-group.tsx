import { IconPlaceholder } from "~/components/icon-placeholder"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"
import { Kbd } from "~/registry/ui/kbd"

export default function KbdInputGroup() {
  return (
    <div class="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <IconPlaceholder
            class="size-4 text-muted-foreground"
            lucide="SearchIcon"
            tabler="IconSearch"
          />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>Cmd</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
