import { IconPlaceholder } from "~/components/icon-placeholder"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertBasic() {
  return (
    <div class="grid w-full max-w-md gap-3">
      <Alert>
        <AlertTitle>Feature updates are available</AlertTitle>
        <AlertDescription>
          Review the changelog to see what shipped in the latest release.
        </AlertDescription>
      </Alert>

      <Alert>
        <IconPlaceholder class="size-4" lucide="CheckIcon" tabler="IconCheck" />
        <AlertTitle>Backup completed</AlertTitle>
        <AlertDescription>Your project data was saved successfully.</AlertDescription>
      </Alert>
    </div>
  )
}
