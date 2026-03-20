import { ItalicIcon } from "lucide-solid"

import { Toggle } from "~/registry/ui/toggle"

export default function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <ItalicIcon />
    </Toggle>
  )
}
