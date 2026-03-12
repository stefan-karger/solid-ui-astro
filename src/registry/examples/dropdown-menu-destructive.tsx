import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button} class="w-fit" variant="outline">
        Actions
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="PencilIcon" tabler="IconPencil" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="ShareIcon" tabler="IconShare" />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="ArchiveIcon" tabler="IconArchive" />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <IconPlaceholder class="size-4" lucide="TrashIcon" tabler="IconTrash" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
