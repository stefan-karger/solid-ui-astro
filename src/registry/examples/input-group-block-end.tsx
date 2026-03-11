import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "~/registry/ui/input-group"

export default function InputGroupBlockEnd() {
  return (
    <div class="grid w-full max-w-sm gap-4">
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="block-end-input">
          Input
        </label>
        <InputGroup class="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p class="text-sm text-muted-foreground">Footer positioned below the input.</p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-medium" for="block-end-textarea">
          Textarea
        </label>
        <InputGroup>
          <InputGroupTextarea id="block-end-textarea" placeholder="Write a comment..." />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton class="ml-auto" size="sm" variant="default">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <p class="text-sm text-muted-foreground">Footer positioned below the textarea.</p>
      </div>
    </div>
  )
}
