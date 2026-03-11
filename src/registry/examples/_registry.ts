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
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-size",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-size.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-default",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-default.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-with-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-rounded",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-rounded.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-spinner",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-spinner.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-demo",
    type: "registry:example",
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "examples/button-group-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-aschild",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-aschild.tsx",
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
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-basic",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-basic.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-field",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-field.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-fieldgroup",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-fieldgroup.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-disabled",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-disabled.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-invalid",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-invalid.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-file",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-file.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-inline",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-inline.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-grid",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-grid.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-required",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-required.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-badge",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-badge.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-input-group",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-input-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-button-group",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "input"],
    files: [
      {
        path: "examples/input-button-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-form",
    type: "registry:example",
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "examples/input-form.tsx",
        type: "registry:example"
      }
    ]
  }
]
