import { Checkbox } from "~/registry/ui/checkbox"
import { Field, FieldLabel, FieldTitle } from "~/registry/ui/field"

export default function FieldCheckbox() {
  return (
    <FieldLabel for="checkbox-demo">
      <Field orientation="horizontal">
        <Checkbox defaultChecked id="checkbox-demo" />
        <FieldTitle class="line-clamp-1 font-normal">
          I agree to the terms and conditions
        </FieldTitle>
      </Field>
    </FieldLabel>
  )
}
