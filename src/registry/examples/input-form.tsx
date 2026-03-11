import { createSignal } from "solid-js"

import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"

export default function InputForm() {
  const [submittedEmail, setSubmittedEmail] = createSignal("")

  return (
    <form
      class="grid w-full max-w-sm gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get("email")
        setSubmittedEmail(typeof email === "string" ? email : "")
      }}
    >
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="form-email">
          Email
        </label>
        <Input id="form-email" name="email" placeholder="name@example.com" required type="email" />
      </div>
      <Button class="w-fit" type="submit">
        Submit
      </Button>
      {submittedEmail() && (
        <p class="text-sm text-muted-foreground">Submitted: {submittedEmail()}</p>
      )}
    </form>
  )
}
