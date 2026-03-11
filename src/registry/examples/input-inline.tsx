import { Input } from "~/registry/ui/input"

export default function InputInline() {
  return (
    <div class="grid w-full max-w-lg items-center gap-2 sm:grid-cols-[140px_1fr]">
      <label class="text-sm font-medium" for="inline-display-name">
        Display name
      </label>
      <Input id="inline-display-name" placeholder="Jane Doe" type="text" />
    </div>
  )
}
