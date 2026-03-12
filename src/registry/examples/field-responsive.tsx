import { Button } from "~/registry/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet
} from "~/registry/ui/field"
import { Input } from "~/registry/ui/input"
import { Textarea } from "~/registry/ui/textarea"

export default function FieldResponsive() {
  return (
    <div class="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel for="field-responsive-name">Name</FieldLabel>
                <FieldDescription>Provide your full name for identification.</FieldDescription>
              </FieldContent>
              <Input id="field-responsive-name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel for="field-responsive-message">Message</FieldLabel>
                <FieldDescription>
                  Keep your message short, ideally under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                class="min-h-[100px] resize-none sm:min-w-[300px]"
                id="field-responsive-message"
                placeholder="Hello, world!"
                required
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
