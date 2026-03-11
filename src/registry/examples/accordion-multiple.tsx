import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/registry/ui/accordion"

export default function AccordionMultiple() {
  return (
    <Accordion
      class="w-full max-w-sm rounded-md border"
      defaultValue={["features", "support"]}
      multiple
    >
      <AccordionItem class="border-b last:border-b-0" value="features">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">Product features</AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          Build forms, dashboards, and internal tools quickly with accessible building blocks.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="border-b last:border-b-0" value="support">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          Support availability
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          Team plans include email support and shared Slack channels during business hours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          Security and compliance
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          We enforce MFA, encryption at rest, and yearly third-party audits.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
