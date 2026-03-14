import { Field, FieldDescription, FieldLabel } from "~/registry/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "~/registry/ui/input-otp"

const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]*$"

export default function InputOTPAlphanumeric() {
  return (
    <Field class="w-fit">
      <FieldLabel for="alphanumeric">Alphanumeric</FieldLabel>
      <FieldDescription>Accepts both letters and numbers.</FieldDescription>
      <InputOTP id="alphanumeric" maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
