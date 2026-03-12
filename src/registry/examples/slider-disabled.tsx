import { Slider } from "~/registry/ui/slider"

export default function SliderDisabled() {
  return (
    <div class="grid w-full max-w-sm gap-4">
      <div class="grid gap-2">
        <p class="text-sm text-muted-foreground">Single value</p>
        <Slider defaultValue={[35]} max={100} disabled />
      </div>
      <div class="grid gap-2">
        <p class="text-sm text-muted-foreground">Range</p>
        <Slider defaultValue={[20, 70]} max={100} disabled />
      </div>
    </div>
  )
}
