import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "~/registry/ui/input-group"

export default function InputGroupDropdown() {
  const [scope, setScope] = createSignal("Documentation")

  return (
    <div class="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              as={InputGroupButton}
              aria-label="More"
              size="icon-xs"
              variant="ghost"
            >
              <IconPlaceholder class="size-4" lucide="EllipsisIcon" tabler="IconDots" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup class="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger as={InputGroupButton} class="pr-1.5 text-xs" variant="ghost">
              {scope()}
              <IconPlaceholder class="size-3" lucide="ChevronDownIcon" tabler="IconChevronDown" />
            </DropdownMenuTrigger>
            <DropdownMenuContent class="[--radius:0.95rem]">
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={() => setScope("Documentation")}>
                  Documentation
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setScope("Blog Posts")}>
                  Blog Posts
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setScope("Changelog")}>
                  Changelog
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
