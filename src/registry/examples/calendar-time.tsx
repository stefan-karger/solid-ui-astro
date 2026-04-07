import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Calendar } from "~/registry/ui/calendar"
import { Card, CardContent, CardFooter } from "~/registry/ui/card"
import { Field, FieldGroup, FieldLabel } from "~/registry/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"

export default function CalendarTime() {
  const [date, setDate] = createSignal<Date | null>(new Date(2025, 1, 12))

  return (
    <Card class="mx-auto w-fit" size="sm">
      <CardContent>
        <Calendar
          class="p-0"
          defaultMonth={new Date(2025, 1, 1)}
          mode="single"
          onValueChange={setDate}
          value={date()}
        />
      </CardContent>
      <CardFooter class="border-t bg-card">
        <FieldGroup>
          <Field>
            <FieldLabel for="calendar-start-time">Start Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                id="calendar-start-time"
                step="1"
                type="time"
                value="10:30:00"
              />
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  class="size-4 text-muted-foreground"
                  lucide="Clock2Icon"
                  tabler="IconClock"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel for="calendar-end-time">End Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                id="calendar-end-time"
                step="1"
                type="time"
                value="12:30:00"
              />
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  class="size-4 text-muted-foreground"
                  lucide="Clock2Icon"
                  tabler="IconClock"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}
