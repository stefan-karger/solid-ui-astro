import { IconPlaceholder } from "~/components/icon-placeholder"
import { Toggle } from "~/registry/ui/toggle"

export default function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <IconPlaceholder lucide="ItalicIcon" tabler="IconItalic" />
      Italic
    </Toggle>
  )
}
