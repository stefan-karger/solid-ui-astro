import { Area, Axis, AxisGrid, AxisLabel, AxisLine, Line, Point } from "solid-charts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "~/registry/ui/chart"

const chartData = [
  { month: "Jan", revenue: 9800 },
  { month: "Feb", revenue: 11200 },
  { month: "Mar", revenue: 10800 },
  { month: "Apr", revenue: 12600 },
  { month: "May", revenue: 14900 },
  { month: "Jun", revenue: 16100 }
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-4)"
  }
} satisfies ChartConfig

export default function ChartAreaLine() {
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Area plus line</CardTitle>
        <CardDescription>
          solid-charts does not bundle an area-with-line primitive, so compose both series.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer class="aspect-auto h-[250px] w-full" config={chartConfig} data={chartData}>
          <Axis axis="y" position="left" tickCount={5}>
            <AxisGrid />
            <AxisLabel format={(value) => `$${Number(value) / 1000}k`} />
          </Axis>
          <Axis axis="x" dataKey="month" position="bottom">
            <AxisLine />
            <AxisLabel />
            <ChartTooltip>
              {({ data }) => (
                <ChartTooltipContent
                  class="min-w-40"
                  config={chartConfig}
                  data={data}
                  indicator="line"
                  keys={["revenue"]}
                  labelKey="month"
                />
              )}
            </ChartTooltip>
          </Axis>
          <Area dataKey="revenue" fill="var(--color-revenue)" fill-opacity={0.18} stroke="none" />
          <Line dataKey="revenue" stroke="var(--color-revenue)" stroke-width={3} />
          <Point dataKey="revenue" fill="var(--color-revenue)" r={3} />
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
