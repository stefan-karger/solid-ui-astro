import { splitProps, type JSX } from "solid-js"
import {
  Panel,
  PanelGroup,
  ResizeHandle,
  type PanelGroupProps,
  type PanelProps,
  type ResizeHandleProps
} from "solid-resizable-panels"

import { cn } from "~/lib/utils"

type ResizablePanelGroupProps = PanelGroupProps & {
  children?: JSX.Element
}

const ResizablePanelGroup = (props: ResizablePanelGroupProps) => {
  const [local, others] = splitProps(props, ["class", "direction"])

  return (
    <PanelGroup
      direction={local.direction}
      class={cn(
        "cn-resizable-panel-group flex h-full w-full [&>.ResizeablePanelGroup-Panel]:min-w-0",
        local.direction?.includes("column") && "cn-resizable-panel-group-vertical flex-col",
        local.class
      )}
      {...others}
    />
  )
}

type ResizablePanelProps = PanelProps & {
  children?: JSX.Element
}

const ResizablePanel = (props: ResizablePanelProps) => {
  const [local, others] = splitProps(props, ["class"])

  return <Panel class={cn("cn-resizable-panel min-w-0", local.class)} {...others} />
}

type ResizableHandleProps = ResizeHandleProps & {
  withHandle?: boolean
  children?: JSX.Element
}

const ResizableHandle = (props: ResizableHandleProps) => {
  const [local, others] = splitProps(props, ["class", "children", "withHandle"])

  return (
    <ResizeHandle
      class={cn(
        "cn-resizable-handle relative flex w-px shrink-0 touch-none items-center justify-center bg-border outline-none select-none",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
        "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "[.cn-resizable-panel-group-vertical>&]:h-px [.cn-resizable-panel-group-vertical>&]:w-full",
        "[.cn-resizable-panel-group-vertical>&]:after:inset-x-0 [.cn-resizable-panel-group-vertical>&]:after:top-1/2 [.cn-resizable-panel-group-vertical>&]:after:h-1 [.cn-resizable-panel-group-vertical>&]:after:w-full [.cn-resizable-panel-group-vertical>&]:after:translate-x-0 [.cn-resizable-panel-group-vertical>&]:after:-translate-y-1/2",
        local.class
      )}
      {...others}
    >
      {local.withHandle && (
        <div
          class={cn(
            "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-background",
            "[.cn-resizable-panel-group-vertical>&]:rotate-90"
          )}
        >
          <div class="cn-resizable-handle-icon" />
        </div>
      )}
      {local.children}
    </ResizeHandle>
  )
}

export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  type ResizableHandleProps,
  type ResizablePanelGroupProps,
  type ResizablePanelProps
}
