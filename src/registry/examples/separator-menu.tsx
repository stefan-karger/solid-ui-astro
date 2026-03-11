import { Separator } from "~/registry/ui/separator"

export default function SeparatorMenu() {
  return (
    <div class="w-full max-w-xs rounded-md border">
      <div class="px-3 py-2 text-sm font-medium">Account</div>
      <Separator />
      <button class="w-full px-3 py-2 text-left text-sm hover:bg-muted" type="button">
        Profile
      </button>
      <button class="w-full px-3 py-2 text-left text-sm hover:bg-muted" type="button">
        Billing
      </button>
      <Separator />
      <button class="w-full px-3 py-2 text-left text-sm hover:bg-muted" type="button">
        Team
      </button>
      <button
        class="w-full px-3 py-2 text-left text-sm text-destructive hover:bg-muted"
        type="button"
      >
        Sign out
      </button>
    </div>
  )
}
