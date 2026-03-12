import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert class="w-full max-w-md" variant="destructive">
      <IconPlaceholder class="size-4" lucide="XIcon" tabler="IconX" />
      <AlertTitle>Unable to process payment</AlertTitle>
      <AlertDescription>
        Your card was declined. Update your billing details and try again.
      </AlertDescription>
    </Alert>
  )
}
