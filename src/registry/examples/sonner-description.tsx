import { toast } from "solid-sonner"

import { DocsColorModeProvider } from "~/lib/docs-color-mode"
import { Button } from "~/registry/ui/button"
import { Toaster } from "~/registry/ui/sonner"

export default function SonnerDescription() {
  return (
    <>
      <Button
        class="w-fit"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm"
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
