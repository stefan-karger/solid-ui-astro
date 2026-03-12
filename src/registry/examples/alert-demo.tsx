import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDemo() {
  return (
    <Alert class="w-full max-w-md">
      <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the command line.
      </AlertDescription>
    </Alert>
  )
}
