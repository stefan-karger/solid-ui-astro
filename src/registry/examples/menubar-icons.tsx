import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from "~/registry/ui/menubar"

export default function MenubarIcons() {
  return (
    <Menubar class="w-72">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <IconPlaceholder class="size-4" lucide="FileIcon" tabler="IconFile" />
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <IconPlaceholder class="size-4" lucide="FolderIcon" tabler="IconFolder" />
            Open Folder
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <IconPlaceholder class="size-4" lucide="ArchiveIcon" tabler="IconArchive" />
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>More</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
              Search
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
              Help
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <IconPlaceholder class="size-4" lucide="Trash2Icon" tabler="IconTrash" />
              Delete
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
