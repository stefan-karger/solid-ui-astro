import { IconCheck, IconChevronDown, IconCopy, IconMarkdown } from "@tabler/icons-solidjs"
import { createEffect, createSignal, onCleanup, Show } from "solid-js"

import { Button } from "~/registry/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "~/registry/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

type DocsCopyPageProps = {
  content: string
  markdownHref: string
}

export default function DocsCopyPage(props: DocsCopyPageProps) {
  const [isCopied, setIsCopied] = createSignal(false)

  createEffect(() => {
    if (!isCopied()) {
      return
    }

    const timeoutId = setTimeout(() => {
      setIsCopied(false)
    }, 2000)

    onCleanup(() => {
      clearTimeout(timeoutId)
    })
  })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.content)
      setIsCopied(true)
    } catch {
      return
    }
  }

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        class="h-8 rounded-r-none shadow-none md:h-7 md:text-[0.8rem]"
        onClick={handleCopy}
      >
        <Show when={isCopied()} fallback={<IconCopy />}>
          <IconCheck />
        </Show>
        Copy Page
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger
          as={Button}
          variant="secondary"
          size="icon-sm"
          aria-label="Open page actions"
          class="hidden rounded-l-none shadow-none sm:inline-flex md:size-7 md:text-[0.8rem]"
        >
          <IconChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="rounded-lg shadow-none">
          <DropdownMenuItem
            as="a"
            href={props.markdownHref}
            rel="noreferrer"
            target="_blank"
            class="*:[svg]:text-muted-foreground"
          >
            <IconMarkdown />
            View as Markdown
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
