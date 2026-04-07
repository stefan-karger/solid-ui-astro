import { addDays } from "date-fns"
import { createSignal } from "solid-js"

import { Calendar } from "~/registry/ui/calendar"
import { Card, CardContent } from "~/registry/ui/card"

export default function CalendarRange() {
  const initialRange = {
    from: new Date(2025, 0, 12),
    to: addDays(new Date(2025, 0, 12), 30)
  }
  const [range, setRange] = createSignal(initialRange)

  return (
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          defaultMonth={range().from ?? undefined}
          mode="range"
          numberOfMonths={2}
          onValueChange={setRange}
          value={range()}
        />
      </CardContent>
    </Card>
  )
}
