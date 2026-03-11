import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "~/registry/ui/input-group"

export default function InputGroupBlockStart() {
  return (
    <div class="grid w-full max-w-sm gap-4">
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="block-start-input">
          Input
        </label>
        <InputGroup class="h-auto">
          <InputGroupInput id="block-start-input" placeholder="Enter your name" />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p class="text-sm text-muted-foreground">Header positioned above the input.</p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-medium" for="block-start-textarea">
          Textarea
        </label>
        <InputGroup>
          <InputGroupTextarea
            class="font-mono text-sm"
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroupAddon align="block-start">
            <IconPlaceholder
              class="size-4 text-muted-foreground"
              lucide="CodeIcon"
              tabler="IconCode"
            />
            <InputGroupText class="font-mono">script.js</InputGroupText>
            <InputGroupButton aria-label="Copy" class="ml-auto" size="icon-xs">
              <IconPlaceholder class="size-4" lucide="CopyIcon" tabler="IconCopy" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <p class="text-sm text-muted-foreground">Header positioned above the textarea.</p>
      </div>
    </div>
  )
}
