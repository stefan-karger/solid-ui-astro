import { For, splitProps, type ComponentProps } from "solid-js"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "~/registry/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description: "Interrupts users with important content and requires an explicit response."
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "Shows preview content when a linked element receives hover or focus."
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description: "Displays task completion state with determinate or indeterminate progress."
  },
  {
    title: "Scroll Area",
    href: "/docs/components/scroll-area",
    description: "Provides a custom scroll container while preserving native semantics."
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description: "Organizes content into layered sections shown one panel at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description: "Displays contextual information on hover or keyboard focus."
  }
]

export default function NavigationMenuDemo() {
  return (
    <div class="w-full max-w-2xl">
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="w-96 rounded-md bg-popover p-2">
              <ListItem href="/docs" title="Introduction">
                Reusable components built with accessibility-first primitives.
              </ListItem>
              <ListItem href="/docs" title="Installation">
                Learn how to add dependencies and structure your component registry.
              </ListItem>
              <ListItem href="/docs" title="Typography">
                Text styles for headings, paragraphs, lists, and inline code.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-2 rounded-md bg-popover p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <For each={components}>
                {(component) => (
                  <ListItem title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                )}
              </For>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs/components/navigation-menu"
            class={navigationMenuTriggerStyle()}
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  )
}

function ListItem(props: ComponentProps<"li"> & { href: string; title: string }) {
  const [local, others] = splitProps(props, ["title", "children", "href"])
  return (
    <li {...others}>
      <NavigationMenuLink href={local.href}>
        <div class="flex flex-col gap-1">
          <div class="leading-none font-medium">{local.title}</div>
          <div class="line-clamp-2 text-sm text-muted-foreground">{local.children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}
