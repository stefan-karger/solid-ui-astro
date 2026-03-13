import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert class="max-w-md" variant="destructive">
      <IconPlaceholder class="size-4" lucide="CircleAlert" tabler="IconAlertCircle" />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  )
}
