import { IconPlaceholder } from "~/components/icon-placeholder"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"

export default function AvatarBadgeIcon() {
  return (
    <Avatar class="grayscale">
      <AvatarImage alt="@michaelessiet" src="https://github.com/michaelessiet.png" />
      <AvatarFallback>ME</AvatarFallback>
      <AvatarBadge>
        <IconPlaceholder class="size-3" lucide="PlusIcon" tabler="IconPlus" />
      </AvatarBadge>
    </Avatar>
  )
}
