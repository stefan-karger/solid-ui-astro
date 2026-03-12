import { createSignal, For } from "solid-js"

import { Checkbox } from "~/registry/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/registry/ui/table"

const invoices = [
  { customer: "Acme Corp", id: "INV-001", status: "Paid", total: "$250.00" },
  { customer: "Globex", id: "INV-002", status: "Pending", total: "$180.00" },
  { customer: "Initech", id: "INV-003", status: "Overdue", total: "$420.00" }
]

export default function CheckboxTable() {
  const [selected, setSelected] = createSignal<string[]>([])

  const allSelected = () => selected().length === invoices.length
  const someSelected = () => selected().length > 0 && !allSelected()

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? invoices.map((invoice) => invoice.id) : [])
  }

  const toggleInvoice = (id: string, checked: boolean) => {
    setSelected((current) => {
      if (checked) {
        return current.includes(id) ? current : [...current, id]
      }

      return current.filter((value) => value !== id)
    })
  }

  return (
    <div class="w-full max-w-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-10">
              <label class="inline-flex items-center">
                <Checkbox
                  checked={allSelected()}
                  indeterminate={someSelected()}
                  onChange={toggleAll}
                />
                <span class="sr-only">Select all invoices</span>
              </label>
            </TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead class="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={invoices}>
            {(invoice) => (
              <TableRow data-state={selected().includes(invoice.id) ? "selected" : undefined}>
                <TableCell>
                  <label class="inline-flex items-center">
                    <Checkbox
                      checked={selected().includes(invoice.id)}
                      onChange={(checked) => toggleInvoice(invoice.id, checked)}
                    />
                    <span class="sr-only">Select {invoice.id}</span>
                  </label>
                </TableCell>
                <TableCell class="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell class="text-right">{invoice.total}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </div>
  )
}
