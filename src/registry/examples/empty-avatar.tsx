import { IconPlaceholder } from "~/components/icon-placeholder"
import { Avatar, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"
import { Button } from "~/registry/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "~/registry/ui/empty"

export default function EmptyAvatar() {
  return (
    <Empty class="max-w-md border">
      <EmptyHeader>
        <EmptyMedia>
          <Avatar size="lg">
            <AvatarImage
              alt="@stefan-karger"
              class="grayscale"
              src="https://github.com/stefan-karger.png"
            />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>No collaborators yet</EmptyTitle>
        <EmptyDescription>
          Invite your first teammate to start reviewing tasks and sharing updates.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <IconPlaceholder class="size-4" lucide="UserPlusIcon" tabler="IconUserPlus" />
          Invite teammate
        </Button>
      </EmptyContent>
    </Empty>
  )
}
