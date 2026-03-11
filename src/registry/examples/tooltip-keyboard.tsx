import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export default function TooltipKeyboard() {
  return (
    <div class="w-full max-w-sm space-y-3">
      <p class="text-xs text-muted-foreground">
        Use Tab to focus each control. Tooltips open on focus the same way they do on hover.
      </p>
      <div class="flex flex-wrap gap-2">
        <Tooltip>
          <TooltipTrigger as={Button} size="sm" variant="outline">
            First action
          </TooltipTrigger>
          <TooltipContent>Available with keyboard focus.</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as={Button} size="sm" variant="outline">
            Second action
          </TooltipTrigger>
          <TooltipContent>Press Enter to continue.</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
