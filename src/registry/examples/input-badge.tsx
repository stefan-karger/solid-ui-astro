import { Input } from "~/registry/ui/input"

export default function InputBadge() {
  return (
    <div class="relative w-full max-w-sm">
      <Input class="pr-20" placeholder="Project slug" type="text" />
      <span class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
        optional
      </span>
    </div>
  )
}
