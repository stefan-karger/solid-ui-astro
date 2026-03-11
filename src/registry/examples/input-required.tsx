import { Input } from "~/registry/ui/input"

export default function InputRequired() {
  return (
    <div class="grid w-full max-w-sm gap-3">
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="required-email">
          Email <span class="text-destructive">*</span>
        </label>
        <Input id="required-email" placeholder="name@example.com" required type="email" />
      </div>
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="optional-company">
          Company
        </label>
        <Input id="optional-company" placeholder="Optional" type="text" />
      </div>
    </div>
  )
}
