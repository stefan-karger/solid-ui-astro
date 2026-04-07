import { createSignal } from "solid-js"

import { Calendar } from "~/registry/ui/calendar"
import { Card, CardContent } from "~/registry/ui/card"

export default function CalendarWeekNumbers() {
  const [date, setDate] = createSignal<Date | null>(new Date(2025, 1, 3))

  return (
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          defaultMonth={date() ?? undefined}
          mode="single"
          onValueChange={setDate}
          value={date()}
          weekNumbers
        />
      </CardContent>
    </Card>
  )
}
