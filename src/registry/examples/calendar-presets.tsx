import { addDays, startOfMonth } from "date-fns"
import { createSignal, For } from "solid-js"

import { Button } from "~/registry/ui/button"
import { Calendar } from "~/registry/ui/calendar"
import { Card, CardContent, CardFooter } from "~/registry/ui/card"

const PRESETS = [
  { label: "Today", value: 0 },
  { label: "Tomorrow", value: 1 },
  { label: "In 3 days", value: 3 },
  { label: "In a week", value: 7 },
  { label: "In 2 weeks", value: 14 }
]

const createBaseDate = () => {
  const today = new Date()

  return new Date(today.getFullYear(), today.getMonth(), today.getDate())
}

export default function CalendarPresets() {
  const baseDate = createBaseDate()
  const [date, setDate] = createSignal<Date | null>(baseDate)
  const [month, setMonth] = createSignal(startOfMonth(baseDate))

  return (
    <Card class="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          class="p-0 [--cell-size:--spacing(9.5)]"
          fixedWeeks
          mode="single"
          month={month()}
          onMonthChange={setMonth}
          onValueChange={setDate}
          value={date()}
        />
      </CardContent>
      <CardFooter class="flex flex-wrap gap-2 border-t">
        <For each={PRESETS}>
          {(preset) => (
            <Button
              class="flex-1"
              onClick={() => {
                const nextDate = addDays(createBaseDate(), preset.value)
                setDate(nextDate)
                setMonth(startOfMonth(nextDate))
              }}
              size="sm"
              variant="outline"
            >
              {preset.label}
            </Button>
          )}
        </For>
      </CardFooter>
    </Card>
  )
}
