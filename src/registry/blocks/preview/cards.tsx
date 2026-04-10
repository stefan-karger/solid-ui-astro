import { createMemo, For, Show, type JSX } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { useDesignSystem } from "~/hooks/use-design-system"
import { FONTS } from "~/lib/create/config"
import { STYLES } from "~/registry/styles"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "~/registry/ui/avatar"
import { Badge } from "~/registry/ui/badge"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/registry/ui/empty"
import { Input } from "~/registry/ui/input"
import { Separator } from "~/registry/ui/separator"

function PlaceholderCard(props: {
  title: string
  description?: string
  eyebrow?: string
  children?: JSX.Element
}) {
  return (
    <Card>
      <CardHeader>
        <Show when={props.eyebrow}>
          <Badge variant="outline" class="w-fit">
            {props.eyebrow}
          </Badge>
        </Show>
        <CardTitle>{props.title}</CardTitle>
        <Show when={props.description}>
          <CardDescription>{props.description}</CardDescription>
        </Show>
      </CardHeader>
      <CardContent>{props.children}</CardContent>
    </Card>
  )
}

export function StyleOverview() {
  const design = useDesignSystem()
  const currentFont = createMemo(() => FONTS.find((font) => font.value === design.font()))
  const currentHeadingFont = createMemo(() =>
    FONTS.find((font) => font.value === design.fontHeading())
  )
  const currentStyle = createMemo(() => STYLES.find((style) => style.name === design.style()))
  const palette = [
    "--background",
    "--foreground",
    "--primary",
    "--secondary",
    "--muted",
    "--accent",
    "--border",
    "--chart-1",
    "--chart-2",
    "--chart-3",
    "--chart-4",
    "--chart-5"
  ]

  return (
    <Card>
      <CardContent class="flex flex-col gap-6 style-lyra:gap-4 style-mira:gap-4">
        <div class="flex flex-col gap-1">
          <div class="cn-font-heading text-2xl font-medium style-lyra:text-lg style-mira:text-lg">
            {currentStyle()?.title} -{" "}
            {currentHeadingFont()?.name && currentHeadingFont()?.name !== currentFont()?.name
              ? currentHeadingFont()?.name
              : currentFont()?.name}
          </div>
          <div class="line-clamp-2 text-base text-muted-foreground style-lyra:text-sm style-mira:text-sm">
            Designers love packing quirky glyphs into test phrases. This is a preview of the
            typography styles.
          </div>
        </div>
        <div class="grid grid-cols-6 gap-3">
          <For each={palette}>
            {(variant) => (
              <div class="flex flex-col items-center gap-2">
                <div
                  class="relative aspect-square w-full rounded-lg after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                  style={{ "background-color": `var(${variant})` }}
                />
                <div class="hidden max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">
                  {variant}
                </div>
              </div>
            )}
          </For>
        </div>
      </CardContent>
    </Card>
  )
}

export function TypographySpecimen() {
  const design = useDesignSystem()
  const currentFont = createMemo(() => FONTS.find((font) => font.value === design.font()))
  const currentHeadingFont = createMemo(() =>
    FONTS.find((font) => font.value === design.fontHeading())
  )
  const headingLabel = createMemo(() => {
    const headingFont = currentHeadingFont()?.name
    return headingFont && headingFont !== currentFont()?.name ? headingFont : "Inherit"
  })

  return (
    <Card>
      <CardContent class="flex flex-col gap-2">
        <div class="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {headingLabel()} - {currentFont()?.name ?? "Default"}
        </div>
        <p class="cn-font-heading text-2xl font-medium">Designing with rhythm and hierarchy.</p>
        <p class="text-sm leading-relaxed text-muted-foreground">
          A strong body style keeps long-form content readable and balances the visual weight of
          headings.
        </p>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.
        </p>
      </CardContent>
    </Card>
  )
}

export function UIElements() {
  return (
    <PlaceholderCard
      title="UI Elements"
      description="Buttons, forms, and controls in one compact surface."
    >
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button>Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div class="rounded-xl border p-3">
          <div class="text-sm font-medium">Two-factor authentication</div>
          <div class="text-sm text-muted-foreground">Verify via email or phone number.</div>
        </div>
        <div class="grid gap-3">
          <Input placeholder="Name" />
          <Input placeholder="Message" />
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </PlaceholderCard>
  )
}

export const CodespacesCard = () => (
  <PlaceholderCard title="Codespaces" description="Remote environments ready for the team.">
    <div class="space-y-3 text-sm">
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>design-system-preview</span>
        <Badge>Running</Badge>
      </div>
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>docs-refresh</span>
        <Badge variant="secondary">Paused</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const Invoice = () => (
  <PlaceholderCard title="Invoice" description="Outstanding balance for this cycle.">
    <div class="space-y-3">
      <div class="text-3xl font-semibold">$2,850.00</div>
      <div class="text-sm text-muted-foreground">Due in 6 days</div>
      <Separator />
      <div class="flex items-center justify-between text-sm">
        <span>Starter plan</span>
        <span>$1,800</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span>Extra seats</span>
        <span>$1,050</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const IconPreviewGrid = () => {
  const icons = [
    ["SearchIcon", "IconSearch"],
    ["BellIcon", "IconBell"],
    ["CreditCardIcon", "IconCreditCard"],
    ["CalendarIcon", "IconCalendar"],
    ["ActivityIcon", "IconActivity"],
    ["FolderIcon", "IconFolder"]
  ] as const

  return (
    <PlaceholderCard title="Icon Preview" description="Preview icon weight and spacing.">
      <div class="grid grid-cols-3 gap-3">
        <For each={icons}>
          {(icon) => (
            <div class="flex aspect-square items-center justify-center rounded-xl border bg-muted/40">
              <IconPlaceholder class="size-5" lucide={icon[0]} tabler={icon[1]} />
            </div>
          )}
        </For>
      </div>
    </PlaceholderCard>
  )
}

export const ObservabilityCard = () => (
  <PlaceholderCard title="Observability" description="Latency and errors remain within target.">
    <div class="space-y-3 text-sm">
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>P95 latency</span>
        <Badge variant="outline">184ms</Badge>
      </div>
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>Error rate</span>
        <Badge variant="outline">0.08%</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const ShippingAddress = () => (
  <PlaceholderCard title="Shipping Address" description="Primary warehouse destination.">
    <div class="space-y-1 text-sm text-muted-foreground">
      <div class="font-medium text-foreground">Northwind Logistics</div>
      <div>119 Mercer Street</div>
      <div>San Francisco, CA 94103</div>
      <div>United States</div>
    </div>
  </PlaceholderCard>
)

export const EnvironmentVariables = () => (
  <PlaceholderCard
    title="Environment Variables"
    description="Masked values for the current environment."
  >
    <div class="space-y-2 font-mono text-xs">
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>DATABASE_URL</span>
        <span>••••••••</span>
      </div>
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>STRIPE_KEY</span>
        <span>••••••••</span>
      </div>
      <div class="flex items-center justify-between rounded-xl border p-3">
        <span>WEBHOOK_SECRET</span>
        <span>••••••••</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const BarChartCard = () => (
  <PlaceholderCard title="Bar Chart" description="Weekly signups trend." />
)

export const InviteTeam = () => (
  <PlaceholderCard title="Invite Team" description="Send a workspace invite.">
    <div class="space-y-3">
      <Input placeholder="name@company.com" />
      <Button class="w-full">Send Invite</Button>
    </div>
  </PlaceholderCard>
)

export const ActivateAgentDialog = () => (
  <PlaceholderCard title="Activate Agent" description="Enable agent support for this workspace.">
    <Button class="w-full">Activate agent</Button>
  </PlaceholderCard>
)

export const SkeletonLoading = () => (
  <PlaceholderCard title="Skeleton Loading" description="Loading state scaffolding." />
)
export const PieChartCard = () => (
  <PlaceholderCard title="Pie Chart" description="Traffic split by source." />
)

export const NoTeamMembers = () => (
  <PlaceholderCard title="No Team Members" description="Invite colleagues to collaborate.">
    <Empty class="min-h-36 rounded-xl border bg-muted/20">
      <EmptyHeader>
        <EmptyTitle>No one here yet</EmptyTitle>
        <EmptyDescription>Add teammates to share comments and review changes.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent class="pt-4">
        <Button>Invite members</Button>
      </EmptyContent>
    </Empty>
  </PlaceholderCard>
)

export const ReportBug = () => (
  <PlaceholderCard title="Report Bug" description="Share a short issue summary.">
    <div class="space-y-3">
      <Input placeholder="Issue title" />
      <Button class="w-full" variant="outline">
        Create report
      </Button>
    </div>
  </PlaceholderCard>
)

export const Contributors = () => (
  <PlaceholderCard title="Contributors" description="Recent collaborators on this branch.">
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MX</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JT</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  </PlaceholderCard>
)

export const FeedbackForm = () => (
  <PlaceholderCard title="Feedback" description="Collect short product notes.">
    <div class="space-y-3">
      <Input placeholder="What could be better?" />
      <Button class="w-full">Send Feedback</Button>
    </div>
  </PlaceholderCard>
)

export const BookAppointment = () => (
  <PlaceholderCard title="Book Appointment" description="Reserve a 30 minute review slot.">
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div class="rounded-xl border p-3 text-center">10:00</div>
      <div class="rounded-xl border p-3 text-center">10:30</div>
      <div class="rounded-xl border p-3 text-center">11:00</div>
      <div class="rounded-xl border p-3 text-center">11:30</div>
    </div>
  </PlaceholderCard>
)

export const SleepReport = () => (
  <PlaceholderCard title="Sleep Report" description="Weekly recovery and sleep quality." />
)

export const GithubProfile = () => (
  <PlaceholderCard title="GitHub Profile" description="Open source activity snapshot.">
    <div class="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>SU</AvatarFallback>
      </Avatar>
      <div>
        <div class="font-medium">solid-ui</div>
        <div class="text-sm text-muted-foreground">132 repos · 4.8k stars</div>
      </div>
    </div>
  </PlaceholderCard>
)

export const WeeklyFitnessSummary = () => (
  <PlaceholderCard title="Weekly Fitness" description="Movement and recovery summary.">
    <div class="grid grid-cols-3 gap-3 text-center text-sm">
      <div class="rounded-xl border p-3">
        <div class="font-medium">5</div>
        <div class="text-muted-foreground">Workouts</div>
      </div>
      <div class="rounded-xl border p-3">
        <div class="font-medium">38k</div>
        <div class="text-muted-foreground">Steps</div>
      </div>
      <div class="rounded-xl border p-3">
        <div class="font-medium">84</div>
        <div class="text-muted-foreground">Recovery</div>
      </div>
    </div>
  </PlaceholderCard>
)

export const FileUpload = () => (
  <PlaceholderCard title="File Upload" description="Drop screenshots or recordings.">
    <div class="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
      Drag and drop files here
    </div>
  </PlaceholderCard>
)

export const AnalyticsCard = () => (
  <PlaceholderCard title="Analytics" description="Engagement trend over the last 30 days." />
)

export const UsageCard = () => (
  <PlaceholderCard title="Usage" description="Quota health for this workspace.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>API requests</span>
        <span>82%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Storage</span>
        <span>64%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Seats</span>
        <span>12/20</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const Shortcuts = () => (
  <PlaceholderCard title="Shortcuts" description="Keyboard-first actions.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Search</span>
        <span class="rounded border px-2 py-0.5 font-mono text-xs">/</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Open command menu</span>
        <span class="rounded border px-2 py-0.5 font-mono text-xs">Ctrl K</span>
      </div>
      <div class="flex items-center justify-between">
        <span>New issue</span>
        <span class="rounded border px-2 py-0.5 font-mono text-xs">N</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const AnomalyAlert = () => (
  <PlaceholderCard
    title="Anomaly Alert"
    description="Unexpected spike detected in the last hour."
    eyebrow="Warning"
  >
    <div class="text-sm text-muted-foreground">
      Investigate the payments ingestion service before deployment.
    </div>
  </PlaceholderCard>
)

export const LiveWaveformCard = () => (
  <PlaceholderCard title="Live Waveform" description="Audio input visualization." />
)
export const Visitors = () => (
  <PlaceholderCard title="Visitors" description="Unique visitors over time." />
)

export const ContributionsActivity = () => (
  <PlaceholderCard title="Contribution Activity" description="Recent edits by the team.">
    <div class="space-y-3 text-sm">
      <div class="flex items-center justify-between">
        <span>Update docs navigation</span>
        <Badge variant="outline">Merged</Badge>
      </div>
      <div class="flex items-center justify-between">
        <span>Refine button spacing</span>
        <Badge variant="outline">Review</Badge>
      </div>
      <div class="flex items-center justify-between">
        <span>Port calendar states</span>
        <Badge variant="outline">Open</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const NotFound = () => (
  <PlaceholderCard title="Not Found" description="Empty fallback surface.">
    <Empty class="min-h-36 rounded-xl border bg-muted/20">
      <EmptyHeader>
        <EmptyTitle>404</EmptyTitle>
        <EmptyDescription>The page you were looking for could not be found.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  </PlaceholderCard>
)
