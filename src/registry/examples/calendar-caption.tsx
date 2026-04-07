import { Calendar } from "~/registry/ui/calendar"

export default function CalendarCaption() {
  return (
    <Calendar
      class="rounded-lg border"
      defaultMonth={new Date(2025, 0, 26)}
      mode="single"
      monthYearSelection
    />
  )
}
