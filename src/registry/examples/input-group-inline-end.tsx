import { IconPlaceholder } from "~/components/icon-placeholder"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"

export default function InputGroupInlineEnd() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <label class="text-sm font-medium" for="inline-end-input">
        Input
      </label>
      <InputGroup>
        <InputGroupInput id="inline-end-input" placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <IconPlaceholder class="size-4" lucide="EyeOffIcon" tabler="IconEyeOff" />
        </InputGroupAddon>
      </InputGroup>
      <p class="text-sm text-muted-foreground">Icon positioned at the end.</p>
    </div>
  )
}
