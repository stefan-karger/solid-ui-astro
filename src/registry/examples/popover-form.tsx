import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger
} from "~/registry/ui/popover"

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger as={Button} variant="outline">
        Set dimensions
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the selected element.</PopoverDescription>
        </PopoverHeader>
        <div class="grid gap-3">
          <div class="grid grid-cols-[80px_1fr] items-center gap-2">
            <Label for="popover-width">Width</Label>
            <Input id="popover-width" value="100%" />
          </div>
          <div class="grid grid-cols-[80px_1fr] items-center gap-2">
            <Label for="popover-height">Height</Label>
            <Input id="popover-height" value="32px" />
          </div>
        </div>
        <div class="flex justify-end">
          <Button size="sm">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
