import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/registry/ui/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion class="w-full max-w-sm rounded-md border" collapsible defaultValue={["starter"]}>
      <AccordionItem class="border-b last:border-b-0" value="starter">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">Starter plan</AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          Includes core components, templates, and email support for one project.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="border-b last:border-b-0" disabled value="business">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          Business plan (coming soon)
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          This item is disabled and cannot be expanded.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="enterprise">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">Enterprise plan</AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          Contact sales for SSO, custom contracts, and dedicated onboarding.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
