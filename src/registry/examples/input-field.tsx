import { Input } from "~/registry/ui/input"

export default function InputField() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <label class="text-sm font-medium" for="field-email">
        Email address
      </label>
      <Input id="field-email" placeholder="name@example.com" type="email" />
      <p class="text-sm text-muted-foreground">We will only use this to send account updates.</p>
    </div>
  )
}
