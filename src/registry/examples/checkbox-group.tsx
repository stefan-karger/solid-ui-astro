import { createSignal, For } from "solid-js"

import { Checkbox } from "~/registry/ui/checkbox"

const channels = [
  { label: "Email", value: "email" },
  { label: "SMS", value: "sms" },
  { label: "Push notifications", value: "push" }
]

export default function CheckboxGroup() {
  const [selected, setSelected] = createSignal<string[]>(["email"])

  const toggle = (value: string, checked: boolean) => {
    setSelected((current) => {
      if (checked) {
        return current.includes(value) ? current : [...current, value]
      }

      return current.filter((item) => item !== value)
    })
  }

  return (
    <div class="grid w-full max-w-sm gap-3">
      <p class="text-sm font-medium">Notification channels</p>
      <div class="grid gap-2" data-slot="checkbox-group">
        <For each={channels}>
          {(channel) => (
            <label class="flex items-center gap-2 text-sm">
              <Checkbox
                checked={selected().includes(channel.value)}
                onChange={(checked) => toggle(channel.value, checked)}
              />
              {channel.label}
            </label>
          )}
        </For>
      </div>
      <p class="text-sm text-muted-foreground">
        Selected: {selected().length > 0 ? selected().join(", ") : "None"}
      </p>
    </div>
  )
}
