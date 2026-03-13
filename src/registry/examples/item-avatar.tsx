import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from "~/registry/ui/item"

export default function ItemAvatar() {
  return (
    <div class="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <img
            alt="Evil Rabbit"
            class="size-10 rounded-full object-cover grayscale"
            src="https://github.com/evilrabbit.png"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="Invite" class="rounded-full" size="icon-sm" variant="outline">
            <IconPlaceholder class="size-4" lucide="PlusIcon" tabler="IconPlus" />
          </Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <div class="flex -space-x-2 [&>img]:ring-2 [&>img]:ring-background [&>img]:grayscale">
            <img
              alt="shadcn"
              class="hidden size-8 rounded-full object-cover sm:block"
              src="https://github.com/shadcn.png"
            />
            <img
              alt="maxleiter"
              class="hidden size-8 rounded-full object-cover sm:block"
              src="https://github.com/maxleiter.png"
            />
            <img
              alt="evilrabbit"
              class="size-8 rounded-full object-cover"
              src="https://github.com/evilrabbit.png"
            />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
