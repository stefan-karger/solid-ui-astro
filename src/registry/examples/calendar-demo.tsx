import { createSignal } from "solid-js"

import { Calendar } from "~/registry/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = createSignal<Date | null>(new Date(2025, 1, 12))

  return (
    <Calendar
      class="rounded-lg border"
      defaultMonth={new Date(2025, 1, 1)}
      mode="single"
      monthYearSelection
      onValueChange={setDate}
      value={date()}
    />
  )
}
