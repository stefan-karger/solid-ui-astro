import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertColors() {
  return (
    <div class="grid w-full max-w-md gap-3">
      <Alert class="border-blue-200 bg-blue-50 text-blue-900">
        <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription class="text-blue-900/80">
          Scheduled maintenance starts tonight at 11:00 PM UTC.
        </AlertDescription>
      </Alert>

      <Alert class="border-amber-200 bg-amber-50 text-amber-900">
        <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription class="text-amber-900/80">
          Your API usage is close to the monthly quota.
        </AlertDescription>
      </Alert>

      <Alert class="border-green-200 bg-green-50 text-green-900">
        <IconPlaceholder class="size-4" lucide="CheckIcon" tabler="IconCheck" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription class="text-green-900/80">
          Your changes were published successfully.
        </AlertDescription>
      </Alert>
    </div>
  )
}
