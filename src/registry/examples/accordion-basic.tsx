import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/registry/ui/accordion"

export default function AccordionBasic() {
  return (
    <Accordion class="w-full max-w-sm rounded-md border" collapsible defaultValue={["item-1"]}>
      <AccordionItem class="border-b last:border-b-0" value="item-1">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          What payment methods do you accept?
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          We accept major credit cards, debit cards, and PayPal for all subscriptions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="border-b last:border-b-0" value="item-2">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          Can I cancel at any time?
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          Yes. You can cancel from your billing settings and keep access until the current cycle
          ends.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger class="px-4 py-3 text-sm font-medium">
          Do you offer refunds?
        </AccordionTrigger>
        <AccordionContent class="px-4 pb-4 text-sm text-muted-foreground">
          We offer a 14-day refund policy for first-time subscriptions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
