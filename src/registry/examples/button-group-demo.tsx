import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  EllipsisIcon,
  ListFilterIcon,
  MailCheckIcon,
  TagIcon,
  Trash2Icon
} from "lucide-solid"
import { createSignal } from "solid-js"

import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function ButtonGroupDemo() {
  const [label, setLabel] = createSignal("personal")

  return (
    <ButtonGroup>
      <ButtonGroup class="hidden sm:flex">
        <Button aria-label="Go back" size="icon" variant="outline">
          <ArrowLeftIcon class="size-4" />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            as={Button}
            aria-label="More options"
            class="shrink-0"
            size="icon"
            variant="outline"
          >
            <EllipsisIcon class="size-4" />
            <span class="sr-only">Open menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon class="size-4" />
                Mark as read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon class="size-4" />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon class="size-4" />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon class="size-4" />
                Add to calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon class="size-4" />
                Add to list
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon class="size-4" />
                  Label as...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup onChange={setLabel} value={label()}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon class="size-4" />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
