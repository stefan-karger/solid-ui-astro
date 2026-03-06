import { Suspense } from "solid-js"

import { Index } from "~/registry/__index__"

type ComponentPreviewRendererProps = {
  name: string
}

export function ComponentPreviewRenderer(props: ComponentPreviewRendererProps) {
  const ResolvedComponent = Index[props.name]?.component

  return <Suspense fallback={null}>{ResolvedComponent ? <ResolvedComponent /> : null}</Suspense>
}
