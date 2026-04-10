import {
  AccountAccess,
  CardOverview,
  ClaimableBalance,
  ContributionHistory,
  CoverArt,
  DividendIncome,
  EmptyConnectBank,
  EmptyDistributeTrack,
  EmptyExploreCatalog,
  Faq,
  FrontDoor,
  IndexInvesting,
  KitchenIsland,
  LoadingCard,
  NewMilestone,
  NotificationSettings,
  Payments,
  PayoutThreshold,
  PowerUsage,
  Preferences,
  QrConnect,
  ReceivingMethod,
  RecentTransactions,
  ReleaseCatalog,
  RollerShades,
  SavingsProgress,
  SavingsTargets,
  SidebarNav,
  SocialLinks,
  StockPerformance,
  SyncingState,
  TransferFunds,
  UpcomingPayments
} from "~/registry/blocks/preview-02/cards"

export default function Preview02Block() {
  return (
    <div class="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)] dark:bg-background style-lyra:md:[--gap:--spacing(6)] style-mira:md:[--gap:--spacing(6)]">
      <div class="flex w-full min-w-max justify-center">
        <div
          class="grid w-[2400px] grid-cols-7 items-start gap-(--gap) bg-muted p-(--gap) md:w-[3000px] dark:bg-background style-lyra:md:w-[2600px] style-mira:md:w-[2600px] *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div class="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ContributionHistory />
            <EmptyDistributeTrack />
            <QrConnect />
            <DividendIncome />
            <IndexInvesting />
            <SyncingState />
          </div>
          <div class="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <PayoutThreshold />
            <ClaimableBalance />
            <Preferences />
            <SavingsProgress />
            <KitchenIsland />
          </div>
          <div class="col-span-2 flex flex-col p-1 [contain-intrinsic-size:760px_1200px] [content-visibility:auto]">
            <SavingsTargets />
            <RecentTransactions />
            <div class="grid grid-cols-2 items-start gap-(--gap)">
              <div class="flex flex-col gap-(--gap)">
                <SidebarNav />
                <Faq />
              </div>
              <div class="flex flex-col gap-(--gap)">
                <Payments />
                <FrontDoor />
              </div>
            </div>
            <ReleaseCatalog />
          </div>
          <div class="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AccountAccess />
            <CardOverview />
            <TransferFunds />
            <CoverArt />
            <LoadingCard />
          </div>
          <div class="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ReceivingMethod />
            <PowerUsage />
            <EmptyConnectBank />
            <UpcomingPayments />
            <RollerShades />
          </div>
          <div class="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StockPerformance />
            <EmptyExploreCatalog />
            <NewMilestone />
            <SocialLinks />
            <NotificationSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
