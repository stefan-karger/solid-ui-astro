import { Button } from "~/registry/ui/button"
import { Spinner } from "~/registry/ui/spinner"

export default function SpinnerEmpty() {
  return (
    <div class="flex w-full max-w-md flex-col items-center gap-4 rounded-lg border border-dashed p-8 text-center">
      <div class="rounded-full bg-muted p-3">
        <Spinner class="size-5" />
      </div>
      <div class="space-y-1">
        <h3 class="text-sm font-medium">Processing your request</h3>
        <p class="text-sm text-muted-foreground">
          Please wait while we process your request. Do not refresh the page.
        </p>
      </div>
      <Button size="sm" variant="outline">
        Cancel
      </Button>
    </div>
  )
}
