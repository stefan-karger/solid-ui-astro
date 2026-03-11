import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function FieldDemo() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <Label class="text-sm font-medium" for="field-demo-email">
        Email address
      </Label>
      <Input id="field-demo-email" placeholder="name@example.com" type="email" />
      <p class="text-sm text-muted-foreground">We will only use this to send account updates.</p>
    </div>
  )
}
