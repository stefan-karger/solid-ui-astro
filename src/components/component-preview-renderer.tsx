import { createMemo, Show, Suspense } from "solid-js"

import { Index } from "~/registry/__index__"

type ComponentPreviewRendererProps = {
  name: string
}

export function ComponentPreviewRenderer(props: ComponentPreviewRendererProps) {
  const resolvedComponent = createMemo(() => Index[props.name]?.component)

  return (
    <Suspense fallback={null}>
      <Show when={resolvedComponent()} keyed>
        {(ResolvedComponent) => <ResolvedComponent />}
      </Show>
    </Suspense>
  )
}
