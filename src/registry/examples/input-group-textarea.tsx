import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea
} from "~/registry/ui/input-group"

export default function InputGroupTextareaExample() {
  return (
    <div class="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          class="min-h-[200px]"
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroupAddon align="block-end" class="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton class="ml-auto" size="sm" variant="default">
            Run
            <IconPlaceholder
              class="size-4"
              lucide="CornerDownLeftIcon"
              tabler="IconCornerDownLeft"
            />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" class="border-b">
          <InputGroupText class="font-mono font-medium">
            <IconPlaceholder class="size-4" lucide="CodeIcon" tabler="IconCode" />
            script.js
          </InputGroupText>
          <InputGroupButton class="ml-auto" size="icon-xs">
            <IconPlaceholder class="size-4" lucide="RefreshCwIcon" tabler="IconRefresh" />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" variant="ghost">
            <IconPlaceholder class="size-4" lucide="CopyIcon" tabler="IconCopy" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
