import { For } from "solid-js"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/registry/ui/table"

const invoices = [
  {
    id: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00"
  },
  {
    id: "INV002",
    status: "Pending",
    method: "PayPal",
    amount: "$150.00"
  },
  {
    id: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00"
  },
  {
    id: "INV004",
    status: "Paid",
    method: "Credit Card",
    amount: "$450.00"
  },
  {
    id: "INV005",
    status: "Paid",
    method: "PayPal",
    amount: "$550.00"
  },
  {
    id: "INV006",
    status: "Pending",
    method: "Bank Transfer",
    amount: "$200.00"
  },
  {
    id: "INV007",
    status: "Unpaid",
    method: "Credit Card",
    amount: "$300.00"
  }
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[120px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={invoices}>
          {(invoice) => (
            <TableRow>
              <TableCell class="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell class="text-right">{invoice.amount}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}
