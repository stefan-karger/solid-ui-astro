import { Input } from "~/registry/ui/input"

export default function InputGrid() {
  return (
    <div class="grid w-full max-w-xl gap-3 sm:grid-cols-2">
      <Input placeholder="First name" type="text" />
      <Input placeholder="Last name" type="text" />
      <Input class="sm:col-span-2" placeholder="Street address" type="text" />
      <Input placeholder="City" type="text" />
      <Input placeholder="Postal code" type="text" />
    </div>
  )
}
