import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "~/registry/ui/avatar"
import { Button } from "~/registry/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "~/registry/ui/empty"

export default function EmptyAvatarGroup() {
  return (
    <Empty class="max-w-md border py-10">
      <EmptyHeader>
        <EmptyMedia>
          <AvatarGroup class="grayscale">
            <Avatar>
              <AvatarImage alt="@stefan-karger" src="https://github.com/stefan-karger.png" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="@carere" src="https://github.com/carere.png" />
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="@ryansolid" src="https://github.com/ryansolid.png" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>
              <IconPlaceholder class="size-3" lucide="PlusIcon" tabler="IconPlus" />
            </AvatarGroupCount>
          </AvatarGroup>
        </EmptyMedia>
        <EmptyTitle>No team members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <IconPlaceholder class="size-4" lucide="PlusIcon" tabler="IconPlus" />
          Invite members
        </Button>
      </EmptyContent>
    </Empty>
  )
}
