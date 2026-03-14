import { ToggleGroup, ToggleGroupItem } from "~/registry/ui/toggle-group"

export default function ToggleGroupDisabled() {
  return (
    <ToggleGroup disabled multiple>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <span class="font-bold">B</span>
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <span class="italic">I</span>
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <span class="underline">U</span>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
