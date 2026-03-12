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

export default function SelectInvalid() {
  return (
    <div class="grid w-full max-w-48 gap-2" data-invalid>
      <label class="text-sm font-medium" for="select-invalid-fruit">
        Fruit
      </label>
      <Select<Fruit>
        options={fruits}
        optionValue="value"
        optionTextValue="label"
        placeholder="Select a fruit"
        validationState="invalid"
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
        )}
      >
        <SelectTrigger aria-invalid id="select-invalid-fruit">
          <SelectValue<Fruit> />
        </SelectTrigger>
        <SelectContent />
      </Select>
      <p class="text-sm text-destructive">Please select a fruit.</p>
    </div>
  )
}
