import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "~/registry/ui/alert"
import { Button } from "~/registry/ui/button"

export default function AlertActionExample() {
  return (
    <div class="grid w-full max-w-md gap-3">
      <Alert>
        <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
        <AlertTitle>Two-factor authentication is off</AlertTitle>
        <AlertDescription>
          Enable 2FA to add an extra layer of protection to your account.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Enable
          </Button>
        </AlertAction>
      </Alert>

      <Alert variant="destructive">
        <IconPlaceholder class="size-4" lucide="XIcon" tabler="IconX" />
        <AlertTitle>Domain verification failed</AlertTitle>
        <AlertDescription>
          We could not find the required DNS record. Try the verification again.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Retry
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}
