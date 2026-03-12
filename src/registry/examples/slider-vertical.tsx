import { Slider } from "~/registry/ui/slider"

export default function SliderVertical() {
  return (
    <div class="flex h-52 items-center">
      <Slider defaultValue={[40]} max={100} orientation="vertical" class="h-full" />
    </div>
  )
}
