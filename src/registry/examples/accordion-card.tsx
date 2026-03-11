import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/registry/ui/accordion"

export default function AccordionCard() {
  return (
    <div class="w-full max-w-sm rounded-xl border bg-card p-5 shadow-xs">
      <h3 class="text-sm font-semibold">Team onboarding checklist</h3>
      <p class="mt-1 text-sm text-muted-foreground">Track progress for new workspace members.</p>

      <Accordion class="mt-4" collapsible defaultValue={["workspace"]}>
        <AccordionItem class="border-b" value="workspace">
          <AccordionTrigger class="py-3 text-sm font-medium">Set up workspace</AccordionTrigger>
          <AccordionContent class="pb-3 text-sm text-muted-foreground">
            Configure organization details, invite teammates, and assign initial roles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem class="border-b" value="channels">
          <AccordionTrigger class="py-3 text-sm font-medium">Create channels</AccordionTrigger>
          <AccordionContent class="pb-3 text-sm text-muted-foreground">
            Create project channels for design, engineering, and release planning.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="automation">
          <AccordionTrigger class="py-3 text-sm font-medium">Enable automation</AccordionTrigger>
          <AccordionContent class="pb-3 text-sm text-muted-foreground">
            Connect issue tracking, CI notifications, and deployment events.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
