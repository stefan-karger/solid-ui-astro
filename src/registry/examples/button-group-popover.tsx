import { BotIcon, ChevronDownIcon } from "lucide-solid"

import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"
import { Popover, PopoverContent, PopoverTrigger } from "~/registry/ui/popover"
import { Separator } from "~/registry/ui/separator"
import { Textarea } from "~/registry/ui/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon class="size-4" />
        Copilot
      </Button>

      <Popover>
        <PopoverTrigger as={Button} aria-label="Open popover" size="icon" variant="outline">
          <ChevronDownIcon class="size-4" />
        </PopoverTrigger>
        <PopoverContent class="w-80 rounded-xl p-0 text-sm">
          <div class="px-4 py-3">
            <div class="text-sm font-medium">Agent Tasks</div>
          </div>
          <Separator />
          <div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              class="mb-4 resize-none"
              placeholder="Describe your task in natural language."
            />
            <p class="font-medium">Start a new task with Copilot</p>
            <p class="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the background and open a
              pull request for your review.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
