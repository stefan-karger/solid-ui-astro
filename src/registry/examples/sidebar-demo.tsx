import { For } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger
} from "~/registry/ui/sidebar"

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", url: "#", icon: { lucide: "BookOpenIcon", tabler: "IconBook" } },
      {
        title: "Installation",
        url: "#",
        icon: { lucide: "DownloadIcon", tabler: "IconDownload" }
      },
      {
        title: "Project Structure",
        url: "#",
        icon: { lucide: "FolderTreeIcon", tabler: "IconHierarchy" }
      }
    ]
  },
  {
    title: "Building Your App",
    items: [
      {
        title: "Routing",
        url: "#",
        icon: { lucide: "RouteIcon", tabler: "IconRoute" }
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
        icon: { lucide: "DatabaseIcon", tabler: "IconDatabase" }
      },
      {
        title: "Styling",
        url: "#",
        icon: { lucide: "PaletteIcon", tabler: "IconPalette" }
      }
    ]
  },
  {
    title: "Reference",
    items: [
      {
        title: "Components",
        url: "#",
        icon: { lucide: "BlocksIcon", tabler: "IconPackages" }
      },
      { title: "CLI", url: "#", icon: { lucide: "TerminalIcon", tabler: "IconTerminal2" } }
    ]
  }
]

export default function SidebarDemo() {
  return (
    <SidebarProvider class="min-h-[36rem] overflow-hidden rounded-xl border">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                as="a"
                class="data-[active=true]:bg-sidebar-primary/10"
                href="#"
                size="lg"
              >
                <div class="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <IconPlaceholder
                    class="size-4"
                    lucide="LayoutDashboardIcon"
                    tabler="IconLayoutDashboard"
                  />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-medium">Docs Workspace</span>
                  <span class="truncate text-xs text-muted-foreground">v1.0.0</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarGroup class="py-0">
            <SidebarGroupContent class="relative">
              <label class="sr-only" for="sidebar-search">
                Search docs
              </label>
              <SidebarInput class="pl-8" id="sidebar-search" placeholder="Search docs..." />
              <IconPlaceholder
                class="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground"
                lucide="SearchIcon"
                tabler="IconSearch"
              />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarHeader>

        <SidebarContent>
          <For each={sections}>
            {(section) => (
              <SidebarGroup>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <For each={section.items}>
                      {(item) => (
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            as="a"
                            href={item.url}
                            isActive={item.isActive}
                            tooltip={item.title}
                          >
                            <IconPlaceholder
                              class="size-4"
                              lucide={item.icon.lucide}
                              tabler={item.icon.tabler}
                            />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )}
                    </For>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </For>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header class="flex h-14 shrink-0 items-center border-b px-4">
          <SidebarTrigger class="-ml-1" />
          <div class="ml-2 text-sm text-muted-foreground">Building Your Application</div>
          <div class="ml-2 font-medium">Data Fetching</div>
        </header>

        <div class="flex flex-1 flex-col gap-4 p-4">
          <div class="grid auto-rows-min gap-4 md:grid-cols-3">
            <div class="aspect-video rounded-xl bg-muted/50" />
            <div class="aspect-video rounded-xl bg-muted/50" />
            <div class="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div class="min-h-[16rem] flex-1 rounded-xl bg-muted/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
