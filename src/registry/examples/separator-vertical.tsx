import { Separator } from "~/registry/ui/separator"

export default function SeparatorVertical() {
  return (
    <div class="flex h-24 items-center text-sm">
      <span>Overview</span>
      <Separator orientation="vertical" class="mx-4" />
      <span>Usage</span>
      <Separator orientation="vertical" class="mx-4" />
      <span>API</span>
    </div>
  )
}
