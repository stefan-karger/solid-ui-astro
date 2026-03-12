import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"
import { Kbd, KbdGroup } from "~/registry/ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export default function KbdTooltip() {
  return (
    <div class="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger as={Button} size="sm" variant="outline">
            Save
          </TooltipTrigger>
          <TooltipContent class="pr-1.5">
            <div class="flex items-center gap-2">
              Save changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as={Button} size="sm" variant="outline">
            Print
          </TooltipTrigger>
          <TooltipContent class="pr-1.5">
            <div class="flex items-center gap-2">
              Print document
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
