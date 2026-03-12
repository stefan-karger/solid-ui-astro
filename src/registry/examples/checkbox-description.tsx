import { Checkbox } from "~/registry/ui/checkbox"

export default function CheckboxDescription() {
  return (
    <label class="flex w-full max-w-sm items-start gap-3 text-sm">
      <Checkbox defaultChecked />
      <div class="grid gap-1 leading-none">
        <span class="font-medium">Enable email updates</span>
        <span class="text-sm text-muted-foreground">
          Receive weekly account activity reports and product tips.
        </span>
      </div>
    </label>
  )
}
