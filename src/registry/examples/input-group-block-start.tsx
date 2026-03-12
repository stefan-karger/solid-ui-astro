import { IconPlaceholder } from "~/components/icon-placeholder"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "~/registry/ui/field"
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
    <FieldGroup class="w-full max-w-sm">
      <Field>
        <FieldLabel for="block-start-input">Input</FieldLabel>
        <InputGroup class="h-auto">
          <InputGroupInput id="block-start-input" placeholder="Enter your name" />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the input.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel for="block-start-textarea">Textarea</FieldLabel>
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
        <FieldDescription>Header positioned above the textarea.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
