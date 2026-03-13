import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import { ButtonGroup } from "~/registry/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger as={Button} aria-label="More options" class="!pl-2" variant="outline">
          <IconPlaceholder class="size-4" lucide="ChevronDownIcon" tabler="IconChevronDown" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="[--radius:1rem]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="VolumeOffIcon" tabler="IconVolumeOff" />
              Mute Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="CheckIcon" tabler="IconCheck" />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="TriangleAlert" tabler="IconAlertTriangle" />
              Report Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="UserRoundXIcon" tabler="IconUserX" />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="ShareIcon" tabler="IconShare" />
              Share Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="CopyIcon" tabler="IconCopy" />
              Copy Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <IconPlaceholder class="size-4" lucide="TrashIcon" tabler="IconTrash" />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
