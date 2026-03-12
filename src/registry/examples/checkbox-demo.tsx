import { createSignal } from "solid-js"

import { Checkbox } from "~/registry/ui/checkbox"

export default function CheckboxDemo() {
  const [checked, setChecked] = createSignal(false)

  return (
    <label class="grid w-full max-w-sm gap-2 text-sm">
      <div class="flex items-start gap-3">
        <Checkbox checked={checked()} onChange={setChecked} />
        <div class="grid gap-1 leading-none">
          <span class="font-medium">Use different settings for my mobile devices</span>
          <span class="text-sm text-muted-foreground">
            You can manage your mobile notifications in account settings.
          </span>
        </div>
      </div>
      <p class="pl-7 text-xs text-muted-foreground">Status: {checked() ? "Enabled" : "Disabled"}</p>
    </label>
  )
}
