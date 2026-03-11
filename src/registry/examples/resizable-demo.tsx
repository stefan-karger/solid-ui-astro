import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/registry/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup class="min-h-[200px] w-full max-w-md rounded-lg border" direction="row">
      <ResizablePanel id="resizable-demo-panel-1" initialSize={25}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="resizable-demo-panel-2" initialSize={50}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="resizable-demo-panel-3" initialSize={25}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
