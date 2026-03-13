import { For } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "~/registry/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com"
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com"
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com"
  }
]

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button} class="w-fit" variant="outline">
        Select
        <IconPlaceholder class="size-4" lucide="ChevronDownIcon" tabler="IconChevronDown" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <For each={people}>
            {(person) => (
              <DropdownMenuItem class="p-0 focus:bg-transparent">
                <Item class="w-full p-2" size="xs">
                  <ItemMedia>
                    <img
                      alt={person.username}
                      class="size-7 rounded-full object-cover grayscale"
                      src={person.avatar}
                    />
                  </ItemMedia>
                  <ItemContent class="gap-0">
                    <ItemTitle>{person.username}</ItemTitle>
                    <ItemDescription class="leading-none">{person.email}</ItemDescription>
                  </ItemContent>
                </Item>
              </DropdownMenuItem>
            )}
          </For>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
