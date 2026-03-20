import { XIcon } from "lucide-solid"
import { createSignal, Show } from "solid-js"

import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger
} from "~/registry/ui/combobox"
import { InputGroupAddon, InputGroupButton } from "~/registry/ui/input-group"

type Language = {
  value: string
  label: string
}

const languages: Language[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" }
]

export default function ComboboxClear() {
  const [value, setValue] = createSignal<Language | null>(null)

  return (
    <Combobox<Language>
      options={languages}
      optionValue="value"
      optionLabel="label"
      optionTextValue="label"
      value={value()}
      onChange={setValue}
      placeholder="Choose a language"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>{props.item.rawValue.label}</ComboboxItem>
      )}
    >
      <ComboboxControl<Language> class="max-w-sm">
        {(state) => (
          <>
            <ComboboxInput />
            <InputGroupAddon align="inline-end">
              <Show when={state.selectedOptions().length > 0}>
                <InputGroupButton
                  aria-label="Clear selection"
                  class="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => state.clear()}
                  onMouseDown={(event) => event.preventDefault()}
                  size="icon-xs"
                  variant="ghost"
                >
                  <XIcon class="size-3.5" />
                </InputGroupButton>
              </Show>
              <ComboboxTrigger />
            </InputGroupAddon>
          </>
        )}
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList />
        <ComboboxEmpty>No language found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}
