import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/registry/ui/accordion"

export default function AccordionBorders() {
  return (
    <Accordion class="w-full max-w-sm" collapsible defaultValue={["notifications"]}>
      <AccordionItem class="rounded-md border px-4" value="notifications">
        <AccordionTrigger class="py-3 text-sm font-medium">
          Notification preferences
        </AccordionTrigger>
        <AccordionContent class="pb-3 text-sm text-muted-foreground">
          Manage email digests, release updates, and billing alerts in one place.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="mt-2 rounded-md border px-4" value="integrations">
        <AccordionTrigger class="py-3 text-sm font-medium">Integrations</AccordionTrigger>
        <AccordionContent class="pb-3 text-sm text-muted-foreground">
          Connect Slack, Linear, and GitHub to keep your team workflows in sync.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="mt-2 rounded-md border px-4" value="workspace">
        <AccordionTrigger class="py-3 text-sm font-medium">Workspace settings</AccordionTrigger>
        <AccordionContent class="pb-3 text-sm text-muted-foreground">
          Customize member roles, security policies, and project defaults.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
