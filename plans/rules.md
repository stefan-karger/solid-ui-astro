# Global Rules

- Port primitive file fully into `src/registry/ui/<primitive>.tsx`.
- If source is `zaidan`: convert `z-*` classes to `cn-*`, replace direct lucide usage with `src/components/icon-placeholder.tsx`.
- Port docs page into `src/content/docs/components/<primitive>.mdx` adapted to Kobalte API.
- Port every docs-referenced example into `src/registry/examples`.
- Update `src/registry/ui/_registry.ts` and `src/registry/examples/_registry.ts` entries for each new primitive/example.
- RTL support is not included yet: skip RTL-specific docs sections/previews and skip all `*-rtl` examples.
- Keep docs in non-RTL parity with the source page (sections, usage notes, and API content), not just a minimal rewrite.
- Keep `ComponentPreview` centered by default and preserve source API depth (tables/snippets) when present; use `align="start"` only when layout requires it.
- Don't use webfetch, everything you need is locally available

# .refernces folder

a collection of all the repos that can be used to gather data / information to be able to port over primitives / examples / docs pages

## shadcn-ui

.references/shadcn-ui/apps/v4/registry/bases/radix/ui/ - here you can find the newest versions of all the primitives
.references/shadcn-ui/apps/v4/examples/radix - here you can find all the examples needed for the docs pages
.references/shadcn-ui/apps/v4/content/docs/components/radix/ - here you can find all the docs pages for the primitives

## zaidan

.references/zaidan/src/registry/kobalte/ui - here you can find all the shadcn-ui primitives that are already ported to solidjs

if you move/port over a primitive from zaidan make sure to do the following changes:

- replace all the z-_ classes with the cn-_ classes to make it align with shadcn-ui
- replace all occurences of lucide-icons with the use of @src/components/icon-placeholder.tsx like it's done in shadcn-ui
- allways port/move over the full primitive!
