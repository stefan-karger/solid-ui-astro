import { addDays } from "date-fns"
import { createSignal } from "solid-js"

import { Calendar } from "~/registry/ui/calendar"
import { Card, CardContent } from "~/registry/ui/card"

export default function CalendarCustomDays() {
  const initialRange = {
    from: new Date(2025, 0, 26),
    to: addDays(new Date(2025, 0, 26), 10)
  }
  const [range, setRange] = createSignal(initialRange)

  return (
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          class="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          customCell={({ date, isOutsideMonth }) => {
            if (isOutsideMonth) {
              return null
            }

            const isWeekend = date.getDay() === 0 || date.getDay() === 6

            return <span class="text-xs opacity-70">{isWeekend ? "$120" : "$100"}</span>
          }}
          defaultMonth={range().from ?? undefined}
          mode="range"
          monthYearSelection
          onValueChange={setRange}
          value={range()}
        />
      </CardContent>
    </Card>
  )
}
