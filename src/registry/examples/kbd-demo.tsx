import { Kbd, KbdGroup } from "~/registry/ui/kbd"

export default function KbdDemo() {
  return (
    <div class="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>Cmd</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  )
}
