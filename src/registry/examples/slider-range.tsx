import { Slider } from "~/registry/ui/slider"

export default function SliderRange() {
  return <Slider defaultValue={[25, 75]} min={0} max={100} step={1} class="w-full max-w-sm" />
}
