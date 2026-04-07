import { Axis, AxisGrid, AxisLabel, AxisLine, Bar } from "solid-charts"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "~/registry/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
]

const DesktopIcon = () => <IconPlaceholder lucide="MonitorIcon" tabler="IconDeviceDesktop" />
const MobileIcon = () => <IconPlaceholder lucide="SmartphoneIcon" tabler="IconDeviceMobile" />

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: DesktopIcon
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    icon: MobileIcon
  }
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Visitors by device</CardTitle>
        <CardDescription>
          Composition-first charts built with solid-charts primitives.
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-3">
        <ChartContainer class="aspect-auto h-[250px] w-full" config={chartConfig} data={chartData}>
          <Axis axis="y" position="left" tickCount={5}>
            <AxisGrid />
            <AxisLabel />
          </Axis>
          <Axis axis="x" dataKey="month" position="bottom">
            <AxisLine />
            <AxisLabel format={(value) => String(value).slice(0, 3)} />
            <ChartTooltip>
              {({ data }) => (
                <ChartTooltipContent
                  config={chartConfig}
                  data={data}
                  keys={["desktop", "mobile"]}
                  labelKey="month"
                />
              )}
            </ChartTooltip>
          </Axis>
          <Bar dataKey="desktop" fill="var(--color-desktop)" rx="4" ry="4" />
          <Bar dataKey="mobile" fill="var(--color-mobile)" rx="4" ry="4" />
        </ChartContainer>
        <ChartLegend>
          <ChartLegendContent config={chartConfig} keys={["desktop", "mobile"]} />
        </ChartLegend>
      </CardContent>
    </Card>
  )
}
