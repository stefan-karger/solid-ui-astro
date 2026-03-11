import { For } from "solid-js"

import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

const placements = [
  { label: "Top", placement: "top", text: "Placed above the trigger." },
  { label: "Right", placement: "right", text: "Placed to the right side." },
  { label: "Bottom", placement: "bottom", text: "Placed below the trigger." },
  { label: "Left", placement: "left", text: "Placed to the left side." }
] as const

export default function TooltipSides() {
  return (
    <div class="grid w-full max-w-xs grid-cols-2 gap-3">
      <For each={placements}>
        {(item) => (
          <Tooltip placement={item.placement} gutter={8}>
            <TooltipTrigger as={Button} size="sm" variant="outline">
              {item.label}
            </TooltipTrigger>
            <TooltipContent>{item.text}</TooltipContent>
          </Tooltip>
        )}
      </For>
    </div>
  )
}
