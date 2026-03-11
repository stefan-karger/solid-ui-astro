import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "~/registry/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger
} from "~/registry/ui/popover"

export default function InputGroupButtonExample() {
  const [isCopied, setIsCopied] = createSignal(false)
  const [isFavorite, setIsFavorite] = createSignal(false)
  let resetCopyTimeout: ReturnType<typeof setTimeout> | undefined

  const handleCopy = async () => {
    await navigator.clipboard?.writeText("https://x.com/shadcn")
    setIsCopied(true)

    if (resetCopyTimeout) {
      clearTimeout(resetCopyTimeout)
    }

    resetCopyTimeout = setTimeout(() => {
      setIsCopied(false)
    }, 1200)
  }

  return (
    <div class="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy" onClick={handleCopy} size="icon-xs" title="Copy">
            <IconPlaceholder
              class="size-4"
              lucide={isCopied() ? "CheckIcon" : "CopyIcon"}
              tabler={isCopied() ? "IconCheck" : "IconCopy"}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup class="[--radius:9999px]">
        <InputGroupAddon>
          <Popover>
            <PopoverTrigger as={InputGroupButton} size="icon-xs" variant="secondary">
              <IconPlaceholder class="size-4" lucide="InfoIcon" tabler="IconInfoCircle" />
            </PopoverTrigger>
            <PopoverContent class="rounded-xl text-sm">
              <PopoverTitle class="text-sm">Your connection is not secure.</PopoverTitle>
              <PopoverDescription>
                You should not enter any sensitive information on this site.
              </PopoverDescription>
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
        <InputGroupAddon class="pl-1.5 text-muted-foreground">https://</InputGroupAddon>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => {
              setIsFavorite((value) => !value)
            }}
            size="icon-xs"
          >
            <IconPlaceholder
              class="size-4"
              lucide="StarIcon"
              tabler="IconStar"
              style={isFavorite() ? { color: "var(--color-primary)" } : undefined}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
