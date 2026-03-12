import { IconPlaceholder } from "~/components/icon-placeholder"
import { Toggle } from "~/registry/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <IconPlaceholder lucide="BookmarkIcon" tabler="IconBookmark" />
      Bookmark
    </Toggle>
  )
}
