import { Button } from "~/registry/ui/button"
import { Textarea } from "~/registry/ui/textarea"

export default function TextareaButton() {
  return (
    <form
      class="grid w-full max-w-sm gap-3"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <Textarea name="message" placeholder="Leave us a message..." rows={4} />
      <Button class="w-fit" type="submit">
        Send message
      </Button>
    </form>
  )
}
