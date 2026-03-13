import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "~/registry/ui/avatar"

export default function AvatarGroupCountIcon() {
  return (
    <AvatarGroup class="grayscale">
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="@maxleiter" src="https://github.com/maxleiter.png" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <IconPlaceholder class="size-3" lucide="PlusIcon" tabler="IconPlus" />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}
