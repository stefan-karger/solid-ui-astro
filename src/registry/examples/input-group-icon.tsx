import { IconPlaceholder } from "~/components/icon-placeholder"
import { InputGroup, InputGroupAddon, InputGroupInput } from "~/registry/ui/input-group"

export default function InputGroupIcon() {
  return (
    <div class="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <IconPlaceholder class="size-4" lucide="SearchIcon" tabler="IconSearch" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Enter your email" type="email" />
        <InputGroupAddon>
          <IconPlaceholder class="size-4" lucide="MailIcon" tabler="IconMail" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <IconPlaceholder class="size-4" lucide="CreditCardIcon" tabler="IconCreditCard" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <IconPlaceholder class="size-4" lucide="CheckIcon" tabler="IconCheck" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <IconPlaceholder class="size-4" lucide="StarIcon" tabler="IconStar" />
          <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
