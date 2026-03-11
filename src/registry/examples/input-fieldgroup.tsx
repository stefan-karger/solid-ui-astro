import { Input } from "~/registry/ui/input"

export default function InputFieldgroup() {
  return (
    <fieldset class="grid w-full max-w-md gap-3 rounded-lg border p-4">
      <legend class="px-1 text-sm font-medium">Shipping address</legend>
      <Input placeholder="Street" type="text" />
      <div class="grid gap-3 sm:grid-cols-2">
        <Input placeholder="City" type="text" />
        <Input placeholder="Postal code" type="text" />
      </div>
    </fieldset>
  )
}
