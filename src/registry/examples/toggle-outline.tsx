import { IconPlaceholder } from "~/components/icon-placeholder"
import { Toggle } from "~/registry/ui/toggle"

export default function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <IconPlaceholder lucide="ItalicIcon" tabler="IconItalic" />
    </Toggle>
  )
}
