import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/registry/ui/resizable"

export default function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup class="min-h-[200px] w-full max-w-md rounded-lg border" direction="row">
      <ResizablePanel id="resizable-handle-panel-1" initialSize={50}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel id="resizable-handle-panel-2" initialSize={50}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Preview</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
