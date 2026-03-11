import { Input } from "~/registry/ui/input"

export default function InputDisabled() {
  return (
    <div class="grid w-full max-w-sm gap-3">
      <Input disabled placeholder="Unavailable" type="text" />
      <Input disabled type="email" value="team@example.com" />
    </div>
  )
}
