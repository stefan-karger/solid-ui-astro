import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid"

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
            <ChevronLeftIcon class="size-4" />
            <span class="sr-only">Previous page</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to next page">
            <ChevronRightIcon class="size-4" />
            <span class="sr-only">Next page</span>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
