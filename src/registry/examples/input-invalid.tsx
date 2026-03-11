import { Input } from "~/registry/ui/input"

export default function InputInvalid() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <label class="text-sm font-medium" for="invalid-email">
        Email address
      </label>
      <Input aria-invalid="true" id="invalid-email" type="email" value="name@" />
      <p class="text-sm text-destructive">Enter a valid email address.</p>
    </div>
  )
}
