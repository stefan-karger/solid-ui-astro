import { For, type JSX } from "solid-js"

import { Badge } from "~/registry/ui/badge"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "~/registry/ui/empty"
import { Input } from "~/registry/ui/input"
import { Progress } from "~/registry/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/registry/ui/table"

function PlaceholderCard(props: { title: string; description?: string; children?: JSX.Element }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        {props.description ? <CardDescription>{props.description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{props.children}</CardContent>
    </Card>
  )
}

export const ContributionHistory = () => (
  <PlaceholderCard title="Contribution History" description="Monthly contributions and streaks." />
)

export const EmptyDistributeTrack = () => (
  <PlaceholderCard title="Distribute Track" description="No distribution connected yet.">
    <Empty class="min-h-32 rounded-xl border bg-muted/20">
      <EmptyHeader>
        <EmptyTitle>No connected distributor</EmptyTitle>
        <EmptyDescription>Connect a distribution partner to publish tracks.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  </PlaceholderCard>
)

export const QrConnect = () => (
  <PlaceholderCard title="QR Connect" description="Mobile pairing and scan flow." />
)
export const DividendIncome = () => (
  <PlaceholderCard title="Dividend Income" description="Quarterly cash flow trend." />
)

export const IndexInvesting = () => (
  <PlaceholderCard title="Index Investing" description="Automated portfolio allocation.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>US Total Market</span>
        <span>45%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>International</span>
        <span>25%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Bonds</span>
        <span>30%</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const SyncingState = () => (
  <PlaceholderCard title="Syncing State" description="Latest update status across devices.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Desktop</span>
        <Badge>Synced</Badge>
      </div>
      <div class="flex items-center justify-between">
        <span>Mobile</span>
        <Badge variant="secondary">Syncing</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const PayoutThreshold = () => (
  <PlaceholderCard title="Payout Threshold" description="Current minimum payout amount.">
    <div class="space-y-3">
      <div class="text-3xl font-semibold">$500</div>
      <Progress value={72} />
    </div>
  </PlaceholderCard>
)

export const ClaimableBalance = () => (
  <PlaceholderCard title="Claimable Balance" description="Available to withdraw today.">
    <div class="text-3xl font-semibold">$12,480</div>
  </PlaceholderCard>
)

export const Preferences = () => (
  <PlaceholderCard title="Preferences" description="Personalized payout and notification defaults.">
    <div class="space-y-2 text-sm">
      <div>Email summaries enabled</div>
      <div>Weekly digest every Friday</div>
    </div>
  </PlaceholderCard>
)

export const SavingsProgress = () => (
  <PlaceholderCard title="Savings Progress" description="Year-to-date savings progress." />
)

export const KitchenIsland = () => (
  <PlaceholderCard title="Kitchen Island" description="Renovation goal progress.">
    <div class="space-y-2">
      <div class="text-3xl font-semibold">$8,240</div>
      <Progress value={61} />
    </div>
  </PlaceholderCard>
)

export const SavingsTargets = () => (
  <PlaceholderCard title="Savings Targets" description="Multi-goal progress across categories.">
    <div class="space-y-3">
      <For each={["Emergency fund", "Home office", "Vacation"]}>
        {(item, index) => (
          <div class="space-y-1">
            <div class="flex items-center justify-between text-sm">
              <span>{item}</span>
              <span>{[78, 42, 64][index()]}%</span>
            </div>
            <Progress value={[78, 42, 64][index()]} />
          </div>
        )}
      </For>
    </div>
  </PlaceholderCard>
)

export const RecentTransactions = () => (
  <PlaceholderCard title="Recent Transactions" description="Latest account activity.">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Merchant</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Adobe</TableCell>
          <TableCell>$49</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Vercel</TableCell>
          <TableCell>$20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Figma</TableCell>
          <TableCell>$15</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </PlaceholderCard>
)

export const SidebarNav = () => (
  <PlaceholderCard title="Sidebar Nav" description="Nested navigation preview.">
    <div class="space-y-2 text-sm">
      <div class="rounded-xl border p-3 font-medium">Overview</div>
      <div class="rounded-xl border p-3 text-muted-foreground">Payments</div>
      <div class="rounded-xl border p-3 text-muted-foreground">Releases</div>
      <div class="rounded-xl border p-3 text-muted-foreground">Settings</div>
    </div>
  </PlaceholderCard>
)

export const Faq = () => (
  <PlaceholderCard title="FAQ" description="Common payout questions.">
    <div class="space-y-2 text-sm">
      <div>When are payouts processed?</div>
      <div>How do transfers work?</div>
    </div>
  </PlaceholderCard>
)

export const Payments = () => (
  <PlaceholderCard title="Payments" description="Upcoming invoices and settlement timing.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Apr 24</span>
        <span>$1,250</span>
      </div>
      <div class="flex items-center justify-between">
        <span>May 02</span>
        <span>$920</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const FrontDoor = () => (
  <PlaceholderCard title="Front Door" description="Smart home entrance automation.">
    <div class="text-sm text-muted-foreground">Auto-lock enabled. Last opened 12 minutes ago.</div>
  </PlaceholderCard>
)

export const ReleaseCatalog = () => (
  <PlaceholderCard title="Release Catalog" description="New drops and catalog updates.">
    <div class="space-y-2 text-sm">
      <div>Spring release bundle</div>
      <div>Ambient tapes remaster</div>
      <div>Instrumental v2</div>
    </div>
  </PlaceholderCard>
)

export const AccountAccess = () => (
  <PlaceholderCard title="Account Access" description="Team and collaborator permissions.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Admin</span>
        <Badge>2</Badge>
      </div>
      <div class="flex items-center justify-between">
        <span>Editor</span>
        <Badge variant="secondary">5</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const CardOverview = () => (
  <PlaceholderCard title="Card Overview" description="Portfolio performance summary." />
)

export const TransferFunds = () => (
  <PlaceholderCard title="Transfer Funds" description="Move funds between accounts.">
    <div class="space-y-3">
      <Input placeholder="$1,000" />
      <Button class="w-full">Transfer</Button>
    </div>
  </PlaceholderCard>
)

export const CoverArt = () => (
  <PlaceholderCard title="Cover Art" description="Latest single artwork preview.">
    <div class="aspect-square rounded-xl border bg-gradient-to-br from-primary/30 to-accent/20" />
  </PlaceholderCard>
)

export const LoadingCard = () => (
  <PlaceholderCard title="Loading Card" description="Deferred content state." />
)

export const ReceivingMethod = () => (
  <PlaceholderCard title="Receiving Method" description="Destination for transfers.">
    <div class="space-y-2 text-sm">
      <div>Bank account ending in 1024</div>
      <div class="text-muted-foreground">ACH transfer</div>
    </div>
  </PlaceholderCard>
)

export const PowerUsage = () => (
  <PlaceholderCard title="Power Usage" description="Weekly home energy consumption." />
)

export const EmptyConnectBank = () => (
  <PlaceholderCard title="Connect Bank" description="No bank account connected.">
    <Empty class="min-h-32 rounded-xl border bg-muted/20">
      <EmptyHeader>
        <EmptyTitle>Connect a bank</EmptyTitle>
        <EmptyDescription>Link an account to receive payouts.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  </PlaceholderCard>
)

export const UpcomingPayments = () => (
  <PlaceholderCard title="Upcoming Payments" description="Scheduled payment timeline.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Spotify</span>
        <span>$2,410</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Apple Music</span>
        <span>$1,180</span>
      </div>
    </div>
  </PlaceholderCard>
)

export const RollerShades = () => (
  <PlaceholderCard title="Roller Shades" description="Living room automation state.">
    <div class="space-y-2 text-sm">
      <div>Morning scene: 7:30 AM</div>
      <div>Current position: 65%</div>
    </div>
  </PlaceholderCard>
)

export const StockPerformance = () => (
  <PlaceholderCard title="Stock Performance" description="Price movement over the last quarter." />
)

export const EmptyExploreCatalog = () => (
  <PlaceholderCard title="Explore Catalog" description="No releases found.">
    <Empty class="min-h-32 rounded-xl border bg-muted/20">
      <EmptyHeader>
        <EmptyTitle>Nothing to explore</EmptyTitle>
        <EmptyDescription>Try a broader genre or keyword search.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  </PlaceholderCard>
)

export const NewMilestone = () => (
  <PlaceholderCard title="New Milestone" description="Recent savings goal reached.">
    <div class="text-sm text-muted-foreground">
      You just crossed the 50% mark on your studio fund.
    </div>
  </PlaceholderCard>
)

export const SocialLinks = () => (
  <PlaceholderCard title="Social Links" description="Connected channels and link health.">
    <div class="space-y-2 text-sm">
      <div class="flex items-center justify-between">
        <span>Instagram</span>
        <Badge>Live</Badge>
      </div>
      <div class="flex items-center justify-between">
        <span>YouTube</span>
        <Badge variant="secondary">Pending</Badge>
      </div>
    </div>
  </PlaceholderCard>
)

export const NotificationSettings = () => (
  <PlaceholderCard title="Notification Settings" description="Digest and alert preferences.">
    <div class="space-y-2 text-sm">
      <div>Payout alerts enabled</div>
      <div>Weekly digest enabled</div>
      <div>Milestone emails disabled</div>
    </div>
  </PlaceholderCard>
)
