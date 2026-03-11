import { AspectRatio } from "~/registry/ui/aspect-ratio"

export default function AspectRatioSquare() {
  return (
    <div class="grid w-full max-w-md grid-cols-2 gap-3">
      <AspectRatio ratio={1} class="overflow-hidden rounded-lg border bg-muted">
        <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/25 to-fuchsia-500/25 text-xs font-medium text-muted-foreground">
          1:1 Square
        </div>
      </AspectRatio>
      <AspectRatio ratio={1} class="overflow-hidden rounded-lg border bg-muted">
        <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500/25 to-orange-500/25 text-xs font-medium text-muted-foreground">
          Gallery Tile
        </div>
      </AspectRatio>
    </div>
  )
}
