import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "~/registry/ui/input-group"

export default function InputGroupSpinner() {
  return (
    <div class="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Searching..." />
        <InputGroupAddon align="inline-end">
          <IconPlaceholder class="size-4 animate-spin" lucide="LoaderIcon" tabler="IconLoader2" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Processing..." />
        <InputGroupAddon>
          <IconPlaceholder
            class="size-4 animate-spin"
            lucide="LoaderCircleIcon"
            tabler="IconLoader"
          />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Saving changes..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <IconPlaceholder class="size-4 animate-spin" lucide="LoaderIcon" tabler="IconLoader2" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Refreshing data..." />
        <InputGroupAddon>
          <IconPlaceholder
            class="size-4 animate-spin"
            lucide="RefreshCwIcon"
            tabler="IconRefresh"
          />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText class="text-muted-foreground">Please wait...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
