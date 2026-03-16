## Primitives

- only export the types that the shadcn-ui version also exports
- if `splitProps` is needed make sure to split it into `[local, others]`
- if `splitProps` is used make sure that `props` is not called anywhere afterwards
- if `mergeProps` is needed make sure the naming is as following:

```tsx
function Component(props: Props) {
    const mergedProps = mergeProps({someDefault: true}, props)
    const [local, others] = splitProps(mergedProps, ["someDefault"])
}

```

- make sure dynamic components in the shadcn-ui are also dynamic in the port
- "use client" should never be present in any file

## Examples

- always use lucide or tabler icons directly, don't use `IconPlaceholder`

## Docs Pages

- the small description between heading and preview in the examples section should match the shadcn-ui one (only exception is if the ported api differs and some adjustments need to be made)
- the api link part at the end of the `API Reference` section should always have the same structure: "See the Kobalte/Corvu documentation for more information."

## ALL! \_registry.ts files

- make sure the dependencies, registryDependencies arrays reflect the actual needed dependencies (make sure nothing is forgotten and nothing is unecessary present)

## Website/Documentation

- search command should always highlight first match automatically like the shadcn-ui version does (cmdk specific feature not present in kobalt/search?)
