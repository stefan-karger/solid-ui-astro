import { IconPlaceholder } from "~/components/icon-placeholder"
import { Badge } from "~/registry/ui/badge"

export default function BadgeLink() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Badge as="a" href="#">
        Docs
        <IconPlaceholder
          class="size-3"
          data-icon="inline-end"
          lucide="ArrowUpRightIcon"
          tabler="IconArrowUpRight"
        />
      </Badge>
      <Badge as="a" href="#" variant="secondary">
        Changelog
        <IconPlaceholder
          class="size-3"
          data-icon="inline-end"
          lucide="ArrowUpRightIcon"
          tabler="IconArrowUpRight"
        />
      </Badge>
      <Badge as="a" href="#" variant="ghost">
        Release notes
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
