import { IconPlaceholder } from "~/components/icon-placeholder"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "~/registry/ui/item"

export default function ItemLink() {
  return (
    <div class="flex w-full max-w-md flex-col gap-4">
      <Item as="a" href="#">
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>Learn how to get started with our components.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconPlaceholder class="size-4" lucide="ChevronRightIcon" tabler="IconChevronRight" />
        </ItemActions>
      </Item>

      <Item as="a" href="#" rel="noopener noreferrer" target="_blank" variant="outline">
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconPlaceholder class="size-4" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" />
        </ItemActions>
      </Item>
    </div>
  )
}
