import { Textarea } from "~/registry/ui/textarea"

export default function TextareaDemo() {
  return (
    <div class="grid w-full max-w-lg gap-3">
      <Textarea placeholder="Write a short update..." />
      <Textarea placeholder="Describe your project goals and timeline." rows={5} />
    </div>
  )
}
