import { Button } from "~/registry/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/registry/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger as={Button} variant="link" class="h-auto px-0 text-sm">
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent class="flex flex-col gap-1">
        <div class="font-medium">@nextjs</div>
        <p>The React framework - created and maintained by @vercel.</p>
        <p class="mt-1 text-xs text-muted-foreground">Joined December 2021</p>
      </HoverCardContent>
    </HoverCard>
  )
}
