import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
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
          <IconPlaceholder class="size-4" lucide="ArrowLeftIcon" tabler="IconArrowLeft" />
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
            <IconPlaceholder class="size-4" lucide="EllipsisIcon" tabler="IconDots" />
            <span class="sr-only">Open menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconPlaceholder class="size-4" lucide="MailCheckIcon" tabler="IconMailCheck" />
                Mark as read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconPlaceholder class="size-4" lucide="ArchiveIcon" tabler="IconArchive" />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconPlaceholder class="size-4" lucide="ClockIcon" tabler="IconClock" />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconPlaceholder
                  class="size-4"
                  lucide="CalendarPlusIcon"
                  tabler="IconCalendarPlus"
                />
                Add to calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconPlaceholder class="size-4" lucide="ListFilterIcon" tabler="IconFilter" />
                Add to list
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconPlaceholder class="size-4" lucide="TagIcon" tabler="IconTag" />
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
                <IconPlaceholder class="size-4" lucide="Trash2Icon" tabler="IconTrash" />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
