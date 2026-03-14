import { createSignal } from "solid-js"

import { Field, FieldDescription, FieldError, FieldLabel } from "~/registry/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "~/registry/ui/input-otp"

export default function InputOTPInvalid() {
  const [value, setValue] = createSignal("000000")

  return (
    <Field class="w-fit">
      <FieldLabel for="invalid">Invalid state</FieldLabel>
      <FieldDescription>Example showing the invalid error state.</FieldDescription>
      <InputOTP id="invalid" maxLength={6} onValueChange={setValue} value={value()}>
        <InputOTPGroup>
          <InputOTPSlot aria-invalid index={0} />
          <InputOTPSlot aria-invalid index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot aria-invalid index={2} />
          <InputOTPSlot aria-invalid index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot aria-invalid index={4} />
          <InputOTPSlot aria-invalid index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldError errors={[{ message: "Invalid code. Please try again." }]} />
    </Field>
  )
}
