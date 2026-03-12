import { IconPlaceholder } from "~/components/icon-placeholder"
import { Badge } from "~/registry/ui/badge"

export default function BadgeSpinner() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Badge>
        <IconPlaceholder
          class="size-3 animate-spin"
          data-icon="inline-start"
          lucide="LoaderCircleIcon"
          tabler="IconLoader"
        />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <IconPlaceholder
          class="size-3 animate-spin"
          data-icon="inline-start"
          lucide="LoaderIcon"
          tabler="IconLoader2"
        />
        Processing
      </Badge>
      <Badge variant="destructive">
        <IconPlaceholder
          class="size-3 animate-spin"
          data-icon="inline-start"
          lucide="RefreshCwIcon"
          tabler="IconRefresh"
        />
        Retrying
      </Badge>
    </div>
  )
}
