import { Button } from "~/registry/ui/button"
import { Kbd } from "~/registry/ui/kbd"

export default function KbdButton() {
  return (
    <div class="flex flex-wrap items-center gap-4">
      <Button class="pr-2" size="sm" variant="outline">
        Accept <Kbd>Enter</Kbd>
      </Button>
      <Button class="pr-2" size="sm" variant="outline">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  )
}
