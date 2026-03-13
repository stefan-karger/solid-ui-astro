import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDemo() {
  return (
    <div class="grid w-full max-w-md items-start gap-4">
      <Alert>
        <IconPlaceholder class="size-4" lucide="CircleCheck" tabler="IconCircleCheck" />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}
