import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <div class="grid w-full max-w-sm gap-3">
      <Tooltip disabled>
        <TooltipTrigger as={Button} variant="outline">
          Tooltip disabled
        </TooltipTrigger>
        <TooltipContent>This content will not be shown.</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger as="span" class="inline-flex w-fit" tabindex={0}>
          <Button disabled>Disabled button</Button>
        </TooltipTrigger>
        <TooltipContent>Upgrade your plan to enable this action.</TooltipContent>
      </Tooltip>
    </div>
  )
}
