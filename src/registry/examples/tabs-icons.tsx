import { IconPlaceholder } from "~/components/icon-placeholder"
import { Tabs, TabsList, TabsTrigger } from "~/registry/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <IconPlaceholder class="size-4" lucide="CodeIcon" tabler="IconCode" />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
