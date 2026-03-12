import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function DropdownMenuAvatar() {
  return (
    <div class="flex w-full max-w-sm items-center justify-between gap-4">
      <DropdownMenu placement="top-end">
        <DropdownMenuTrigger as={Button} class="h-12 w-full justify-start px-2" variant="outline">
          <img
            alt="shadcn"
            class="size-8 rounded-full object-cover"
            src="https://github.com/shadcn.png"
          />
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">shadcn</span>
            <span class="truncate text-xs text-muted-foreground">shadcn@example.com</span>
          </div>
          <IconPlaceholder
            class="ml-auto size-4 text-muted-foreground"
            lucide="ChevronsUpDownIcon"
            tabler="IconSelector"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-(--kb-popper-anchor-width) min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder
                class="size-4"
                lucide="BadgeCheckIcon"
                tabler="IconRosetteDiscountCheck"
              />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="CreditCardIcon" tabler="IconCreditCard" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="BellIcon" tabler="IconBell" />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="LogOutIcon" tabler="IconLogout" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger as={Button} class="rounded-full" size="icon" variant="ghost">
          <img
            alt="shadcn"
            class="size-8 rounded-full object-cover"
            src="https://github.com/shadcn.png"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder
                class="size-4"
                lucide="BadgeCheckIcon"
                tabler="IconRosetteDiscountCheck"
              />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="CreditCardIcon" tabler="IconCreditCard" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder class="size-4" lucide="BellIcon" tabler="IconBell" />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="LogOutIcon" tabler="IconLogout" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
