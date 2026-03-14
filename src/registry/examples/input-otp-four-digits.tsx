import { Field, FieldDescription, FieldLabel } from "~/registry/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "~/registry/ui/input-otp"

const REGEXP_ONLY_DIGITS = "^\\d*$"

export default function InputOTPFourDigits() {
  return (
    <Field class="w-fit">
      <FieldLabel for="four-digits">4 digits</FieldLabel>
      <FieldDescription>Common pattern for PIN codes.</FieldDescription>
      <InputOTP id="four-digits" maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
