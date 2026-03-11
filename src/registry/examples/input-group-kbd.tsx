import { IconPlaceholder } from "~/components/icon-placeholder"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"

export default function InputGroupKbd() {
  return (
    <InputGroup class="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <IconPlaceholder
          class="size-4 text-muted-foreground"
          lucide="SearchIcon"
          tabler="IconSearch"
        />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <kbd class="rounded-md border px-1.5 py-0.5 text-xs text-muted-foreground">Ctrl</kbd>
        <kbd class="rounded-md border px-1.5 py-0.5 text-xs text-muted-foreground">K</kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
