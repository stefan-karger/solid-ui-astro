import { createSignal } from "solid-js"

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue
} from "~/registry/ui/progress"

export default function ProgressControlled() {
  const [value, setValue] = createSignal(40)

  return (
    <div class="grid w-full max-w-sm gap-3">
      <Progress value={value()} class="grid gap-2">
        <div class="flex items-center gap-2">
          <ProgressLabel>Exporting report</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>

      <label class="text-sm text-muted-foreground" for="progress-controlled-range">
        Completion: {value()}%
      </label>
      <input
        id="progress-controlled-range"
        type="range"
        min="0"
        max="100"
        value={value()}
        onInput={(event) => setValue(Number(event.currentTarget.value))}
      />
    </div>
  )
}
