import { Separator } from "~/registry/ui/separator"

export default function SeparatorDemo() {
  return (
    <div class="w-full max-w-md">
      <div class="space-y-1">
        <h4 class="text-sm leading-none font-medium">Solid UI</h4>
        <p class="text-sm text-muted-foreground">
          Build accessible interfaces with composable primitives.
        </p>
      </div>
      <Separator class="my-4" />
      <div class="flex h-5 items-center text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" class="mx-3" />
        <span>Docs</span>
        <Separator orientation="vertical" class="mx-3" />
        <span>Source</span>
      </div>
    </div>
  )
}
