import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/registry/ui/resizable"

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup class="min-h-[300px] w-full max-w-md rounded-lg border" direction="column">
      <ResizablePanel id="resizable-vertical-panel-1" initialSize={30}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="resizable-vertical-panel-2" initialSize={70}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
