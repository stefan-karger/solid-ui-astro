import { IconPlaceholder } from "~/components/icon-placeholder"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import { ChartLegend, ChartLegendContent, type ChartConfig } from "~/registry/ui/chart"

const RevenueIcon = () => <IconPlaceholder lucide="TrendingUpIcon" tabler="IconTrendingUp" />
const RefundsIcon = () => <IconPlaceholder lucide="TrendingDownIcon" tabler="IconTrendingDown" />
const NetIcon = () => <IconPlaceholder lucide="WalletIcon" tabler="IconWallet" />

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
    icon: RevenueIcon
  },
  refunds: {
    label: "Refunds",
    color: "var(--chart-5)",
    icon: RefundsIcon
  },
  net: {
    label: "Net",
    color: "var(--chart-2)",
    icon: NetIcon
  }
} satisfies ChartConfig

export default function ChartLegendExample() {
  return (
    <Card class="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Legend content</CardTitle>
        <CardDescription>
          Legend entries are driven explicitly from `keys` and `ChartConfig`.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartLegend>
          <ChartLegendContent config={chartConfig} keys={["revenue", "refunds", "net"]} />
        </ChartLegend>
      </CardContent>
    </Card>
  )
}
