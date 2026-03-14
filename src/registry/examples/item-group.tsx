import { For } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle
} from "~/registry/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com"
  },
  {
    username: "carere",
    avatar: "https://github.com/carere.png",
    email: "carere@vercel.com"
  },
  {
    username: "ryansolid",
    avatar: "https://github.com/ryansolid",
    email: "ryansolid@vercel.com"
  }
]

export default function ItemGroupExample() {
  return (
    <ItemGroup class="max-w-sm">
      <For each={people}>
        {(person) => (
          <Item variant="outline">
            <ItemMedia>
              <img
                alt={`@${person.username}`}
                class="size-8 rounded-full object-cover grayscale"
                src={person.avatar}
              />
            </ItemMedia>
            <ItemContent class="gap-1">
              <ItemTitle>{person.username}</ItemTitle>
              <ItemDescription>{person.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button class="rounded-full" size="icon" variant="ghost">
                <IconPlaceholder class="size-4" lucide="PlusIcon" tabler="IconPlus" />
              </Button>
            </ItemActions>
          </Item>
        )}
      </For>
    </ItemGroup>
  )
}
