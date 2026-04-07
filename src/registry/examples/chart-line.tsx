import { Axis, AxisCursor, AxisGrid, AxisLabel, AxisLine, Line, Point } from "solid-charts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "~/registry/ui/chart"

const chartData = [
  { day: "Mon", visitors: 180 },
  { day: "Tue", visitors: 142 },
  { day: "Wed", visitors: 198 },
  { day: "Thu", visitors: 164 },
  { day: "Fri", visitors: 231 },
  { day: "Sat", visitors: 187 },
  { day: "Sun", visitors: 205 }
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig

export default function ChartLine() {
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Line chart</CardTitle>
        <CardDescription>
          Compose active points and a cursor directly from primitives.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer class="aspect-auto h-[250px] w-full" config={chartConfig} data={chartData}>
          <Axis axis="y" position="left" tickCount={5}>
            <AxisGrid />
            <AxisLabel />
          </Axis>
          <Axis axis="x" dataKey="day" position="bottom">
            <AxisCursor />
            <AxisLine />
            <AxisLabel />
            <ChartTooltip>
              {({ data }) => (
                <ChartTooltipContent
                  config={chartConfig}
                  data={data}
                  indicator="line"
                  keys={["visitors"]}
                  labelKey="day"
                />
              )}
            </ChartTooltip>
          </Axis>
          <Line dataKey="visitors" stroke="var(--color-visitors)" stroke-width={3} />
          <Point
            activeProps={{ r: 6, stroke: "var(--color-background)", "stroke-width": 2 }}
            dataKey="visitors"
            fill="var(--color-visitors)"
            r={4}
          />
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
