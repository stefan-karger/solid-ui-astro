import { Field, FieldContent, FieldDescription, FieldLabel } from "~/registry/ui/field"
import { Switch } from "~/registry/ui/switch"

export default function FieldSwitch() {
  return (
    <div class="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel for="field-switch-2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use
            a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="field-switch-2fa" />
      </Field>
    </div>
  )
}
