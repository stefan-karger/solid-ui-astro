import { IconPlaceholder } from "~/components/icon-placeholder"
import { Input } from "~/registry/ui/input"

export default function InputDemo() {
  return (
    <div class="grid w-full max-w-lg gap-3">
      <Input placeholder="Email" type="email" />
      <div class="relative">
        <IconPlaceholder
          class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          lucide="SearchIcon"
          tabler="IconSearch"
        />
        <Input class="pl-9" placeholder="Search projects..." type="search" />
      </div>
      <Input placeholder="Password" type="password" />
    </div>
  )
}
