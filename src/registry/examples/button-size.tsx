import { Button } from "~/registry/ui/button"

export default function ButtonSize() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
