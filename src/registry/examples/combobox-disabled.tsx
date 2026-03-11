import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger
} from "~/registry/ui/combobox"

type Workspace = {
  value: string
  label: string
}

const workspaces: Workspace[] = [
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "support", label: "Support" }
]

export default function ComboboxDisabled() {
  return (
    <Combobox<Workspace>
      defaultValue={workspaces[0]}
      disabled
      options={workspaces}
      optionValue="value"
      optionLabel="label"
      optionTextValue="label"
      placeholder="Select workspace"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>{props.item.rawValue.label}</ComboboxItem>
      )}
    >
      <ComboboxControl class="max-w-sm">
        <ComboboxInput />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList />
      </ComboboxContent>
    </Combobox>
  )
}
