import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"

export default function ButtonSpinner() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button disabled>
        <IconPlaceholder
          class="size-4 animate-spin"
          lucide="LoaderCircleIcon"
          tabler="IconLoader"
        />
        Saving...
      </Button>
      <Button disabled size="icon" variant="outline">
        <IconPlaceholder
          class="size-4 animate-spin"
          lucide="LoaderCircleIcon"
          tabler="IconLoader"
        />
        <span class="sr-only">Loading</span>
      </Button>
    </div>
  )
}
