import { Input } from "~/registry/ui/input"

export default function InputFile() {
  return (
    <div class="grid w-full max-w-sm gap-2">
      <label class="text-sm font-medium" for="resume-file">
        Upload resume
      </label>
      <Input id="resume-file" type="file" />
      <p class="text-sm text-muted-foreground">PDF, DOC, or DOCX up to 5MB.</p>
    </div>
  )
}
