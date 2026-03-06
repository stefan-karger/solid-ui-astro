import type { Registry } from "~/registry/schema"

export const ui: Registry["items"] = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "button-group",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/button-group.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "navigation-menu",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/navigation-menu.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui"
      }
    ]
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui"
      }
    ]
  }
]
