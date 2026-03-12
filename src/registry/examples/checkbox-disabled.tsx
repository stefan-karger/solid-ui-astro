import { Checkbox } from "~/registry/ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <div class="grid w-full max-w-sm gap-3">
      <label class="flex items-center gap-2 text-sm text-muted-foreground">
        <Checkbox checked disabled />
        Trial plan (selected)
      </label>
      <label class="flex items-center gap-2 text-sm text-muted-foreground">
        <Checkbox disabled />
        Enterprise plan
      </label>
    </div>
  )
}
