import { Badge } from "~/registry/ui/badge"

export default function BadgeColors() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Badge class="bg-blue-600 text-blue-50 dark:bg-blue-600 dark:text-blue-50">Blue</Badge>
      <Badge class="bg-green-600 text-green-50 dark:bg-green-600 dark:text-green-50">Green</Badge>
      <Badge class="bg-amber-600 text-amber-50 dark:bg-amber-600 dark:text-amber-50">Amber</Badge>
      <Badge class="bg-rose-600 text-rose-50 dark:bg-rose-600 dark:text-rose-50">Rose</Badge>
      <Badge class="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Blue</Badge>
      <Badge class="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Green</Badge>
      <Badge class="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">Amber</Badge>
      <Badge class="bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">Rose</Badge>
    </div>
  )
}
