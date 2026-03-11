import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip openDelay={150}>
      <TooltipTrigger as={Button} variant="outline">
        Hover or focus
      </TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  )
}
