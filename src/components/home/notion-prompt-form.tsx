import {
  IconApps,
  IconArrowUp,
  IconAt,
  IconBook,
  IconCircleDashedPlus,
  IconPaperclip,
  IconPlus,
  IconWorld,
  IconX
} from "@tabler/icons-solidjs"
import { createMemo, createSignal, For, Match, Show, Switch } from "solid-js"

import { Avatar, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"
import { Badge } from "~/registry/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList
} from "~/registry/ui/command"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"
import { Field, FieldLabel } from "~/registry/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea
} from "~/registry/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "~/registry/ui/popover"
import { Switch as UiSwitch } from "~/registry/ui/switch"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

type MentionableItem = {
  type: "page" | "user"
  title: string
  image: string
  workspace?: string
}

type MentionOption = MentionableItem & {
  value: string
  label: string
}

type MentionGroup = {
  heading: string
  items: MentionOption[]
}

const mentionable: MentionableItem[] = [
  { type: "page", title: "Meeting Notes", image: "📝" },
  { type: "page", title: "Project Dashboard", image: "📊" },
  { type: "page", title: "Ideas & Brainstorming", image: "💡" },
  { type: "page", title: "Calendar & Events", image: "📅" },
  { type: "page", title: "Documentation", image: "📚" },
  { type: "page", title: "Goals & Objectives", image: "🎯" },
  { type: "page", title: "Budget Planning", image: "💰" },
  { type: "page", title: "Team Directory", image: "👥" },
  { type: "page", title: "Technical Specs", image: "🔧" },
  { type: "page", title: "Analytics Report", image: "📈" },
  {
    type: "user",
    title: "shadcn",
    image: "https://github.com/shadcn.png",
    workspace: "Workspace"
  },
  {
    type: "user",
    title: "maxleiter",
    image: "https://github.com/maxleiter.png",
    workspace: "Workspace"
  },
  {
    type: "user",
    title: "evilrabbit",
    image: "https://github.com/evilrabbit.png",
    workspace: "Workspace"
  }
]

const models = [{ name: "Auto" }, { name: "Agent Mode", badge: "Beta" }, { name: "Plan Mode" }]

function MentionableIcon(props: { item: MentionableItem }) {
  return (
    <Switch>
      <Match when={props.item.type === "page"}>
        <span class="flex size-4 items-center justify-center">{props.item.image}</span>
      </Match>
      <Match when={props.item.type === "user"}>
        <Avatar class="size-4">
          <AvatarImage src={props.item.image} />
          <AvatarFallback>{props.item.title[0]}</AvatarFallback>
        </Avatar>
      </Match>
    </Switch>
  )
}

export default function NotionPromptForm() {
  const [mentions, setMentions] = createSignal<string[]>([])
  const [mentionPopoverOpen, setMentionPopoverOpen] = createSignal(false)
  const [modelMenuOpen, setModelMenuOpen] = createSignal(false)
  const [scopeMenuOpen, setScopeMenuOpen] = createSignal(false)
  const [selectedModel, setSelectedModel] = createSignal(models[0])
  const [searchQuery, setSearchQuery] = createSignal("")
  const [webSearchEnabled, setWebSearchEnabled] = createSignal(true)
  const [appsEnabled, setAppsEnabled] = createSignal(true)

  const groupedMentionables = createMemo<MentionGroup[]>(() => {
    const trimmedQuery = searchQuery().trim().toLowerCase()
    const currentMentions = new Set(mentions())

    const availableItems = mentionable.filter((item) => {
      if (currentMentions.has(item.title)) {
        return false
      }

      if (!trimmedQuery) {
        return true
      }

      return item.title.toLowerCase().includes(trimmedQuery)
    })

    return [
      {
        heading: "Pages",
        items: availableItems
          .filter((item) => item.type === "page")
          .map((item) => ({ ...item, label: item.title, value: item.title }))
      },
      {
        heading: "Users",
        items: availableItems
          .filter((item) => item.type === "user")
          .map((item) => ({ ...item, label: item.title, value: item.title }))
      }
    ].filter((group) => group.items.length > 0)
  })

  const hasMentions = createMemo(() => mentions().length > 0)

  const addMention = (title: string | null) => {
    if (!title) {
      return
    }

    setMentions((current) => [...current, title])
    setMentionPopoverOpen(false)
    setSearchQuery("")
  }

  const removeMention = (title: string) => {
    setMentions((current) => current.filter((mention) => mention !== title))
  }

  return (
    <form>
      <Field>
        <FieldLabel class="sr-only" for="notion-prompt">
          Prompt
        </FieldLabel>
        <InputGroup class="rounded-xl">
          <InputGroupTextarea id="notion-prompt" placeholder="Ask, search, or make anything..." />
          <InputGroupAddon align="block-start" class="pt-3">
            <Popover onOpenChange={setMentionPopoverOpen} open={mentionPopoverOpen()}>
              <Tooltip>
                <TooltipTrigger as={PopoverTrigger}>
                  <InputGroupButton
                    class="transition-transform"
                    size={hasMentions() ? "icon-sm" : "sm"}
                    variant="outline"
                  >
                    <IconAt class="size-4" />
                    <Show when={!hasMentions()}>Add context</Show>
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>Mention a person, page, or date</TooltipContent>
              </Tooltip>
              <PopoverContent align="start" class="w-80 p-0">
                <Command<MentionOption, MentionGroup>
                  onChange={addMention}
                  onInputChange={setSearchQuery}
                  optionGroupChildren="items"
                  optionLabel="label"
                  optionTextValue="label"
                  optionValue="value"
                  options={groupedMentionables()}
                  placeholder="Search pages..."
                  itemComponent={(props) => (
                    <CommandItem class="rounded-lg" item={props.item}>
                      <MentionableIcon item={props.item.rawValue} />
                      {props.item.rawValue.title}
                    </CommandItem>
                  )}
                  sectionComponent={(props) => (
                    <CommandGroup>
                      <CommandGroupLabel>{props.section.rawValue.heading}</CommandGroupLabel>
                    </CommandGroup>
                  )}
                >
                  <CommandInput />
                  <CommandList />
                  <CommandEmpty>No pages found</CommandEmpty>
                </Command>
              </PopoverContent>
            </Popover>
            <div class="-m-1.5 no-scrollbar flex gap-1 overflow-y-auto p-1.5">
              <For each={mentions()}>
                {(mention) => {
                  const item = createMemo(() =>
                    mentionable.find((entry) => entry.title === mention)
                  )

                  return (
                    <Show when={item()}>
                      {(entry) => (
                        <InputGroupButton
                          class="rounded-full pl-2!"
                          onClick={() => removeMention(mention)}
                          size="sm"
                          variant="secondary"
                        >
                          <MentionableIcon item={entry()} />
                          {entry().title}
                          <IconX class="size-4" />
                        </InputGroupButton>
                      )}
                    </Show>
                  )
                }}
              </For>
            </div>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" class="gap-1">
            <Tooltip>
              <TooltipTrigger
                as={InputGroupButton}
                aria-label="Attach file"
                class="rounded-full"
                size="icon-sm"
              >
                <IconPaperclip class="size-4" />
              </TooltipTrigger>
              <TooltipContent>Attach file</TooltipContent>
            </Tooltip>

            <DropdownMenu onOpenChange={setModelMenuOpen} open={modelMenuOpen()}>
              <Tooltip>
                <TooltipTrigger as={DropdownMenuTrigger}>
                  <InputGroupButton class="rounded-full" size="sm">
                    {selectedModel().name}
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>Select AI model</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="start" class="min-w-48" side="top">
                <DropdownMenuGroup>
                  <DropdownMenuLabel class="text-xs text-muted-foreground">
                    Select Agent Mode
                  </DropdownMenuLabel>
                  <For each={models}>
                    {(model) => (
                      <DropdownMenuCheckboxItem
                        checked={model.name === selectedModel().name}
                        class="pl-2 *:[span:first-child]:right-2 *:[span:first-child]:left-auto"
                        onChange={(checked) => {
                          if (checked === true) {
                            setSelectedModel(model)
                          }
                        }}
                      >
                        {model.name}
                        <Show when={model.badge}>
                          {(badge) => (
                            <Badge
                              class="h-5 rounded-sm bg-blue-100 px-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                              variant="secondary"
                            >
                              {badge()}
                            </Badge>
                          )}
                        </Show>
                      </DropdownMenuCheckboxItem>
                    )}
                  </For>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu onOpenChange={setScopeMenuOpen} open={scopeMenuOpen()}>
              <DropdownMenuTrigger as={InputGroupButton} class="rounded-full" size="sm">
                <IconWorld class="size-4" />
                All Sources
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-72" side="top">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    as="label"
                    for="web-search"
                    onSelect={(event) => event.preventDefault()}
                  >
                    <IconWorld class="size-4" />
                    Web Search
                    <UiSwitch
                      class="ml-auto"
                      id="web-search"
                      checked={webSearchEnabled()}
                      onChange={setWebSearchEnabled}
                    />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    as="label"
                    for="apps"
                    onSelect={(event) => event.preventDefault()}
                  >
                    <IconApps class="size-4" />
                    Apps and Integrations
                    <UiSwitch
                      class="ml-auto"
                      id="apps"
                      checked={appsEnabled()}
                      onChange={setAppsEnabled}
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconCircleDashedPlus class="size-4" />
                    All Sources I can access
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Avatar class="size-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      shadcn
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent class="w-72 p-0 [--radius:1rem]">
                      <div class="max-h-72 overflow-y-auto p-1">
                        <For each={mentionable.filter((item) => item.type === "user")}>
                          {(user) => (
                            <DropdownMenuItem>
                              <Avatar class="size-4">
                                <AvatarImage src={user.image} />
                                <AvatarFallback>{user.title[0]}</AvatarFallback>
                              </Avatar>
                              {user.title}
                              <span class="text-muted-foreground">- {user.workspace}</span>
                            </DropdownMenuItem>
                          )}
                        </For>
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <IconBook class="size-4" />
                    Help Center
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <IconPlus class="size-4" />
                    Connect Apps
                  </DropdownMenuItem>
                  <DropdownMenuLabel class="text-xs text-muted-foreground">
                    We&apos;ll only search in the sources selected here.
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <InputGroupButton
              aria-label="Send"
              class="ml-auto rounded-full"
              size="icon-sm"
              variant="default"
            >
              <IconArrowUp class="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  )
}
