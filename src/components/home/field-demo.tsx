import { Button } from "~/registry/ui/button"
import { Checkbox } from "~/registry/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet
} from "~/registry/ui/field"
import { Input } from "~/registry/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"
import { Textarea } from "~/registry/ui/textarea"

type Option = {
  label: string
  value: string
}

const months: Option[] = [
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" }
]

const years: Option[] = [
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" }
]

export default function FieldDemo() {
  return (
    <div class="w-full max-w-md rounded-xl border p-6">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>All transactions are secure and encrypted</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel for="checkout-card-name">Name on Card</FieldLabel>
                <Input id="checkout-card-name" placeholder="John Doe" required />
              </Field>
              <div class="grid grid-cols-3 gap-4">
                <Field class="col-span-2">
                  <FieldLabel for="checkout-card-number">Card Number</FieldLabel>
                  <Input id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
                  <FieldDescription>Enter your 16-digit number.</FieldDescription>
                </Field>
                <Field class="col-span-1">
                  <FieldLabel for="checkout-cvv">CVV</FieldLabel>
                  <Input id="checkout-cvv" placeholder="123" required />
                </Field>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel for="checkout-exp-month">Month</FieldLabel>
                  <Select<Option>
                    options={months}
                    optionValue="value"
                    optionTextValue="label"
                    placeholder="MM"
                    itemComponent={(props) => (
                      <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
                    )}
                  >
                    <SelectTrigger class="w-full" id="checkout-exp-month">
                      <SelectValue<Option>>{(state) => state.selectedOption()?.label}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                </Field>
                <Field>
                  <FieldLabel for="checkout-exp-year">Year</FieldLabel>
                  <Select<Option>
                    options={years}
                    optionValue="value"
                    optionTextValue="label"
                    placeholder="YYYY"
                    itemComponent={(props) => (
                      <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
                    )}
                  >
                    <SelectTrigger class="w-full" id="checkout-exp-year">
                      <SelectValue<Option>>{(state) => state.selectedOption()?.label}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="checkout-same-as-shipping" defaultChecked />
                <FieldLabel class="font-normal" for="checkout-same-as-shipping">
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel for="checkout-comments">Comments</FieldLabel>
                <Textarea id="checkout-comments" placeholder="Add any additional comments" />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
