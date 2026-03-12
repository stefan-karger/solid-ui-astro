import { IconPlaceholder } from "~/components/icon-placeholder"
import { Badge } from "~/registry/ui/badge"

export default function BadgeIcon() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Badge>
        <IconPlaceholder
          class="size-3"
          data-icon="inline-start"
          lucide="CircleCheckIcon"
          tabler="IconCircleCheck"
        />
        Verified
      </Badge>
      <Badge variant="secondary">
        New
        <IconPlaceholder
          class="size-3"
          data-icon="inline-end"
          lucide="ArrowRightIcon"
          tabler="IconArrowRight"
        />
      </Badge>
      <Badge variant="outline">
        External
        <IconPlaceholder
          class="size-3"
          data-icon="inline-end"
          lucide="ArrowUpRightIcon"
          tabler="IconArrowUpRight"
        />
      </Badge>
    </div>
  )
}
