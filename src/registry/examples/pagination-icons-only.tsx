import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "~/registry/ui/pagination"

export default function PaginationIconsOnly() {
  return (
    <Pagination class="mx-0 w-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to previous page">
            <IconPlaceholder class="size-4" lucide="ChevronLeftIcon" tabler="IconChevronLeft" />
            <span class="sr-only">Previous page</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to next page">
            <IconPlaceholder class="size-4" lucide="ChevronRightIcon" tabler="IconChevronRight" />
            <span class="sr-only">Next page</span>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
