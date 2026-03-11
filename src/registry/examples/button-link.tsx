import { Button } from "~/registry/ui/button"

export default function ButtonLink() {
  return (
    <div class="flex flex-wrap items-center gap-4">
      <Button as="a" href="#" variant="link">
        Visit the docs
      </Button>
      <Button variant="link">Learn more</Button>
    </div>
  )
}
