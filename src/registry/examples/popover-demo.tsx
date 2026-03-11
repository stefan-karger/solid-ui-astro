import { Button } from "~/registry/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger
} from "~/registry/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger as={Button} variant="outline">
        Open popover
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <PopoverHeader>
          <PopoverTitle>Share dashboard</PopoverTitle>
          <PopoverDescription>
            Anyone with this link can view the latest analytics for your workspace.
          </PopoverDescription>
        </PopoverHeader>
        <div class="flex justify-end gap-2">
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm">Copy link</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
