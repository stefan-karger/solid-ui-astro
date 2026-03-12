import { createSignal } from "solid-js"

import { Checkbox } from "~/registry/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"

type Fruit = {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" }
]

export default function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = createSignal(true)

  return (
    <div class="grid w-full max-w-sm gap-4">
      <label class="flex items-start gap-3 text-sm">
        <Checkbox checked={alignItemWithTrigger()} onChange={setAlignItemWithTrigger} />
        <span class="grid gap-1 leading-none">
          <span class="font-medium">Align selected item with trigger</span>
          <span class="text-xs text-muted-foreground">
            Placement: {alignItemWithTrigger() ? "bottom-start" : "bottom-end"}
          </span>
        </span>
      </label>
      <Select<Fruit>
        defaultValue={fruits[1]}
        options={fruits}
        optionValue="value"
        optionTextValue="label"
        placement={alignItemWithTrigger() ? "bottom-start" : "bottom-end"}
        placeholder="Select a fruit"
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
        )}
      >
        <SelectTrigger>
          <SelectValue<Fruit> />
        </SelectTrigger>
        <SelectContent />
      </Select>
    </div>
  )
}
