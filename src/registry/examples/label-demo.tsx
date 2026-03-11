import { Label } from "~/registry/ui/label"

export default function LabelDemo() {
  return (
    <div class="flex items-center gap-2">
      <input class="size-4 rounded border border-input" id="label-demo-terms" type="checkbox" />
      <Label for="label-demo-terms">Accept terms and conditions</Label>
    </div>
  )
}
