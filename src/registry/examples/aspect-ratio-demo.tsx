import { AspectRatio } from "~/registry/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div class="w-full max-w-md">
      <AspectRatio ratio={16 / 9} class="overflow-hidden rounded-lg border bg-muted">
        <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500/25 via-cyan-500/15 to-emerald-500/25 text-sm font-medium text-muted-foreground">
          16:9 Landscape
        </div>
      </AspectRatio>
    </div>
  )
}
