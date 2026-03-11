import { Textarea } from "~/registry/ui/textarea"

export default function TextareaDisabled() {
  return (
    <div class="grid w-full max-w-sm gap-3">
      <Textarea disabled placeholder="This field is disabled." rows={4} />
      <Textarea disabled rows={4}>
        This value cannot be edited.
      </Textarea>
    </div>
  )
}
