import type { Registry } from "~/registry/schema"

export const blocks: Registry["items"] = [
  {
    name: "preview",
    title: "Preview",
    type: "registry:block",
    registryDependencies: [
      "alert-dialog",
      "avatar",
      "badge",
      "button",
      "button-group",
      "card",
      "checkbox",
      "combobox",
      "dropdown-menu",
      "empty",
      "field",
      "input",
      "input-group",
      "item",
      "label",
      "popover",
      "radio-group",
      "select",
      "separator",
      "sheet",
      "slider",
      "spinner",
      "switch",
      "textarea",
      "tooltip",
      "example"
    ],
    files: [
      {
        path: "blocks/preview/index.tsx",
        type: "registry:block"
      }
    ]
  },
  {
    name: "preview-02",
    title: "Preview 02",
    type: "registry:block",
    dependencies: ["react-qr-code"],
    registryDependencies: [
      "accordion",
      "badge",
      "breadcrumb",
      "button",
      "calendar",
      "card",
      "chart",
      "checkbox",
      "combobox",
      "dropdown-menu",
      "empty",
      "field",
      "input",
      "input-group",
      "item",
      "label",
      "native-select",
      "progress",
      "radio-group",
      "select",
      "separator",
      "sidebar",
      "skeleton",
      "slider",
      "spinner",
      "switch",
      "table",
      "tabs",
      "textarea",
      "toggle-group"
    ],
    files: [
      {
        path: "blocks/preview-02/index.tsx",
        type: "registry:block"
      }
    ]
  }
]
