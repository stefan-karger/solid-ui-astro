import { BookmarkIcon } from "lucide-solid"

import { Toggle } from "~/registry/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon />
      Bookmark
    </Toggle>
  )
}
