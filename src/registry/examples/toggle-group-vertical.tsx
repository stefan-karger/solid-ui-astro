import { ToggleGroup, ToggleGroupItem } from "~/registry/ui/toggle-group"

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup defaultValue={["bold", "italic"]} multiple orientation="vertical" spacing={1}>
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
