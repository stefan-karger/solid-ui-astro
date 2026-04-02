import { toast } from "solid-sonner"

import { DocsColorModeProvider } from "~/lib/docs-color-mode"
import { Button } from "~/registry/ui/button"
import { Toaster } from "~/registry/ui/sonner"

export default function SonnerDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => undefined
            }
          })
        }
      >
        Show Toast
      </Button>
      <DocsColorModeProvider>
        <Toaster />
      </DocsColorModeProvider>
    </>
  )
}
