import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "~/registry/ui/context-menu"

export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger class="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span class="hidden pointer-fine:inline-block">Right click here</span>
        <span class="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <IconPlaceholder class="size-4" lucide="PencilIcon" tabler="IconPencil" />
            Edit
          </ContextMenuItem>
          <ContextMenuItem>
            <IconPlaceholder class="size-4" lucide="ShareIcon" tabler="IconShare" />
            Share
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <IconPlaceholder class="size-4" lucide="TrashIcon" tabler="IconTrash" />
            Delete
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
