import { IconPlaceholder } from "~/components/icon-placeholder"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"

export default function AvatarBadgeIcon() {
  return (
    <Avatar class="grayscale">
      <AvatarImage alt="@pranathip" src="https://github.com/pranathip.png" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <IconPlaceholder class="size-3" lucide="PlusIcon" tabler="IconPlus" />
      </AvatarBadge>
    </Avatar>
  )
}
