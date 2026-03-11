import { AspectRatio } from "~/registry/ui/aspect-ratio"

export default function AspectRatioPortrait() {
  return (
    <div class="w-full max-w-xs">
      <AspectRatio ratio={3 / 4} class="overflow-hidden rounded-xl border bg-muted">
        <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500/25 via-pink-500/20 to-indigo-500/25 text-sm font-medium text-muted-foreground">
          3:4 Portrait
        </div>
      </AspectRatio>
    </div>
  )
}
