import { IconPlaceholder } from "~/components/icon-placeholder"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/registry/ui/empty"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"
import { Kbd } from "~/registry/ui/kbd"

export default function EmptyInputGroup() {
  return (
    <Empty class="max-w-lg border">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
          below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup class="w-full">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <IconPlaceholder class="size-4" lucide="CircleDashedIcon" tabler="IconCircleDashed" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="/docs">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
