import { createSignal } from "solid-js"

import { Calendar } from "~/registry/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = createSignal(new Date(2025, 0, 26))

  return (
    <Calendar
      class="rounded-lg border"
      defaultMonth={new Date(2025, 0, 26)}
      mode="single"
      monthYearSelection
      onValueChange={setDate}
      value={date()}
    />
  )
}
