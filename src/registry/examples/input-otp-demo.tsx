import { createSignal } from "solid-js"

import { InputOTP, InputOTPGroup, InputOTPSlot } from "~/registry/ui/input-otp"

export default function InputOTPDemo() {
  const [value, setValue] = createSignal("123456")

  return (
    <InputOTP maxLength={6} onValueChange={setValue} value={value()}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
