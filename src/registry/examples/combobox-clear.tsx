import { createSignal, Show } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
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
            <Show when={state.selectedOptions().length > 0}>
              <button
                aria-label="Clear selection"
                class="inline-flex size-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => state.clear()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
              >
                <IconPlaceholder class="size-3.5" lucide="XIcon" tabler="IconX" />
              </button>
            </Show>
            <ComboboxTrigger />
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
