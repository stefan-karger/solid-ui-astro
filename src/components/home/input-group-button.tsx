import { IconInfoCircle, IconStar } from "@tabler/icons-solidjs"
import { createSignal } from "solid-js"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "~/registry/ui/input-group"
import { Label } from "~/registry/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "~/registry/ui/popover"

export default function InputGroupButtonTile() {
  const [isFavorite, setIsFavorite] = createSignal(false)

  return (
    <div class="grid w-full max-w-sm gap-6">
      <Label class="sr-only" for="input-secure-19">
        Input Secure
      </Label>
      <InputGroup class="[--radius:9999px]">
        <InputGroupInput class="pl-0.5!" id="input-secure-19" />
        <Popover>
          <PopoverTrigger as={InputGroupAddon}>
            <InputGroupButton aria-label="Info" size="icon-xs" variant="secondary">
              <IconInfoCircle class="size-4" />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent align="start" class="flex flex-col gap-1 rounded-xl text-sm">
            <p class="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon class="pl-1! text-muted-foreground">https://</InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Favorite"
            onClick={() => setIsFavorite((value) => !value)}
            size="icon-xs"
          >
            <IconStar
              class="size-4"
              style={
                isFavorite() ? { fill: "currentColor", color: "var(--color-primary)" } : undefined
              }
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
