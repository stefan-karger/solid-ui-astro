import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button} class="w-fit" variant="outline">
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="UserIcon" tabler="IconUser" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="CreditCardIcon" tabler="IconCreditCard" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder class="size-4" lucide="SettingsIcon" tabler="IconSettings" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconPlaceholder class="size-4" lucide="LogOutIcon" tabler="IconLogout" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
