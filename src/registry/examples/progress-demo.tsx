import { Progress, ProgressIndicator, ProgressTrack } from "~/registry/ui/progress"

export default function ProgressDemo() {
  return (
    <div class="grid w-full max-w-sm gap-4">
      <Progress value={25}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <Progress value={50}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <Progress value={80}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    </div>
  )
}
