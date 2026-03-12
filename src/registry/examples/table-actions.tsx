import { For } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/registry/ui/table"

const products = [
  {
    id: "mouse",
    name: "Wireless Mouse",
    price: "$29.99"
  },
  {
    id: "keyboard",
    name: "Mechanical Keyboard",
    price: "$129.99"
  },
  {
    id: "hub",
    name: "USB-C Hub",
    price: "$49.99"
  }
]

export default function TableActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead class="text-right">Price</TableHead>
          <TableHead class="w-20 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={products}>
          {(product) => (
            <TableRow>
              <TableCell class="font-medium">{product.name}</TableCell>
              <TableCell class="text-right">{product.price}</TableCell>
              <TableCell class="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    as={Button}
                    aria-label={`Open actions for ${product.name}`}
                    class="size-8"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <IconPlaceholder class="size-4" lucide="EllipsisIcon" tabler="IconDots" />
                    <span class="sr-only">Open menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-32">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}
