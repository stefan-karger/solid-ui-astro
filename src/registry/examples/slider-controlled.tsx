import { createSignal } from "solid-js"

import { Slider } from "~/registry/ui/slider"

export default function SliderControlled() {
  const [value, setValue] = createSignal([30, 70])

  return (
    <div class="grid w-full max-w-sm gap-3">
      <p class="text-sm text-muted-foreground">
        Temperature range: {value()[0]}°C - {value()[1]}°C
      </p>
      <Slider value={value()} onChange={setValue} min={0} max={100} step={1} />
    </div>
  )
}
