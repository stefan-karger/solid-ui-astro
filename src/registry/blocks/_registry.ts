import type { Registry } from "~/registry/schema"

export const blocks: Registry["items"] = [
  {
    name: "preview",
    title: "Preview",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "button",
      "calendar",
      "card",
      "chart",
      "empty",
      "input",
      "pagination",
      "progress",
      "separator",
      "table",
      "tabs"
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
    registryDependencies: [
      "badge",
      "button",
      "calendar",
      "card",
      "chart",
      "empty",
      "input",
      "pagination",
      "progress",
      "separator",
      "table"
    ],
    files: [
      {
        path: "blocks/preview-02/index.tsx",
        type: "registry:block"
      }
    ]
  }
]
