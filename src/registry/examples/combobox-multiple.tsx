import { For } from "solid-js"

import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger
} from "~/registry/ui/combobox"

type Tag = {
  value: string
  label: string
}

const tags: Tag[] = [
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Support" }
]

export default function ComboboxMultiple() {
  return (
    <Combobox<Tag>
      multiple
      options={tags}
      optionValue="value"
      optionLabel="label"
      optionTextValue="label"
      placeholder="Select tags"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>{props.item.rawValue.label}</ComboboxItem>
      )}
    >
      <ComboboxControl<Tag> class="max-w-md" variant="chips">
        {(state) => (
          <>
            <For each={state.selectedOptions()}>
              {(option) => (
                <ComboboxChip>
                  {option.label}
                  <ComboboxChipRemove
                    onClick={(event) => {
                      event.preventDefault()
                      state.remove(option)
                    }}
                  />
                </ComboboxChip>
              )}
            </For>
            <ComboboxInput class="min-w-24 px-0" placeholder="Add a tag" />
            <ComboboxTrigger />
          </>
        )}
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList />
        <ComboboxEmpty>No tag found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}
