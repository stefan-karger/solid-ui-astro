# Global Rules

- Port primitive file fully into `src/registry/ui/<primitive>.tsx`.
- If source is `zaidan`: convert `z-*` classes to `cn-*`, replace direct lucide usage with `src/components/icon-placeholder.tsx`.
- Port docs page into `src/content/docs/components/<primitive>.mdx` adapted to Kobalte API.
- Port every docs-referenced example into `src/registry/examples`.
- Update `src/registry/ui/_registry.ts` and `src/registry/examples/_registry.ts` entries for each new primitive/example.
- RTL support is not included yet: skip RTL-specific docs sections/previews and skip all `*-rtl` examples.
