import { IconPlaceholder } from "~/components/icon-placeholder"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"

export default function CollapsibleFileTree() {
  return (
    <div class="w-full max-w-sm rounded-lg border bg-card p-2 text-sm">
      <Collapsible defaultOpen>
        <CollapsibleTrigger class="rounded-md px-2 py-1.5 hover:bg-muted/50">
          <div class="flex items-center gap-2">
            <IconPlaceholder
              class="size-4 text-muted-foreground"
              lucide="FolderIcon"
              tabler="IconFolder"
            />
            <span>src</span>
          </div>
          <IconPlaceholder
            class="size-4 text-muted-foreground transition-transform group-data-[expanded]/collapsible-trigger:rotate-90"
            lucide="ChevronRightIcon"
            tabler="IconChevronRight"
          />
        </CollapsibleTrigger>
        <CollapsibleContent class="mt-1 space-y-1 pl-4">
          <FileNode name="app.tsx" />
          <Collapsible defaultOpen>
            <CollapsibleTrigger class="rounded-md px-2 py-1.5 hover:bg-muted/50">
              <div class="flex items-center gap-2">
                <IconPlaceholder
                  class="size-4 text-muted-foreground"
                  lucide="FolderIcon"
                  tabler="IconFolder"
                />
                <span>components</span>
              </div>
              <IconPlaceholder
                class="size-4 text-muted-foreground transition-transform group-data-[expanded]/collapsible-trigger:rotate-90"
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
              />
            </CollapsibleTrigger>
            <CollapsibleContent class="mt-1 space-y-1 pl-4">
              <FileNode name="button.tsx" />
              <FileNode name="dialog.tsx" />
              <FileNode name="input.tsx" />
            </CollapsibleContent>
          </Collapsible>
          <FileNode name="lib/utils.ts" />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function FileNode(props: { name: string }) {
  return (
    <div class="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground hover:bg-muted/50">
      <IconPlaceholder class="size-4" lucide="FileIcon" tabler="IconFile" />
      <span class="truncate">{props.name}</span>
    </div>
  )
}
