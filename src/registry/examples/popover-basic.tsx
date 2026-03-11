import { Button } from "~/registry/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger
} from "~/registry/ui/popover"

export default function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger as={Button} variant="secondary">
        Product details
      </PopoverTrigger>
      <PopoverContent class="max-w-xs">
        <PopoverTitle>Desk Lamp</PopoverTitle>
        <PopoverDescription>
          Aluminum body, 8W warm light, and a touch dimmer with three brightness presets.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}
