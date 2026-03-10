import type { Registry } from "~/registry/schema"

export const examples: Registry["items"] = [
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/accordion-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-demo",
    type: "registry:example",
    registryDependencies: ["command"],
    files: [
      {
        path: "examples/command-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-basic",
    type: "registry:example",
    registryDependencies: ["command", "button"],
    files: [
      {
        path: "examples/command-basic.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-shortcuts",
    type: "registry:example",
    registryDependencies: ["command", "button"],
    files: [
      {
        path: "examples/command-shortcuts.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-groups",
    type: "registry:example",
    registryDependencies: ["command", "button"],
    files: [
      {
        path: "examples/command-groups.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-scrollable",
    type: "registry:example",
    registryDependencies: ["command", "button"],
    files: [
      {
        path: "examples/command-scrollable.tsx",
        type: "registry:example"
      }
    ]
  }
]
