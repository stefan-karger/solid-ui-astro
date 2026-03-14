import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as CommandPrimitive from "@kobalte/core/search"
import { mergeProps, splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { cn } from "~/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "~/registry/ui/dialog"
import { InputGroup, InputGroupAddon } from "~/registry/ui/input-group"

type CommandProps<
  Option,
  OptGroup = never,
  T extends ValidComponent = "div"
> = CommandPrimitive.SearchRootProps<Option, OptGroup, T> & {
  class?: string | undefined
}

const Command = <Option, OptGroup = never, T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CommandProps<Option, OptGroup, T>>
) => {
  const mergedProps = mergeProps({ open: true } as CommandProps<Option, OptGroup, T>, props)
  const [local, others] = splitProps(mergedProps as CommandProps<Option, OptGroup, T>, ["class"])

  return (
    <CommandPrimitive.Root
      data-slot="command"
      class={cn("cn-command flex size-full flex-col overflow-hidden", local.class)}
      {...others}
    />
  )
}

type CommandDialogProps = Omit<ComponentProps<typeof Dialog>, "children"> &
  Pick<ComponentProps<"div">, "class" | "children"> & {
    title?: string
    description?: string
    showCloseButton?: boolean
  }

const CommandDialog = (props: CommandDialogProps) => {
  const mergedProps = mergeProps(
    {
      title: "Command Palette",
      description: "Search for a command to run...",
      showCloseButton: false
    },
    props
  )

  const [local, others] = splitProps(mergedProps as CommandDialogProps, [
    "title",
    "description",
    "showCloseButton",
    "children",
    "class"
  ])

  return (
    <Dialog {...others}>
      <DialogHeader class="sr-only">
        <DialogTitle>{local.title}</DialogTitle>
        <DialogDescription>{local.description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        class={cn("cn-command-dialog top-1/3 translate-y-0 overflow-hidden p-0", local.class)}
        showCloseButton={local.showCloseButton}
      >
        {local.children}
      </DialogContent>
    </Dialog>
  )
}

type CommandInputProps = CommandPrimitive.SearchInputProps & {
  class?: string | undefined
}

const CommandInput = (props: CommandInputProps) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <CommandPrimitive.Control data-slot="command-input-wrapper" class="cn-command-input-wrapper">
      <InputGroup class="cn-command-input-group">
        <CommandPrimitive.Input
          data-slot="command-input"
          class={cn(
            "cn-command-input outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            local.class
          )}
          {...others}
        />
        <InputGroupAddon>
          <IconPlaceholder class="cn-command-input-icon" lucide="SearchIcon" tabler="IconSearch" />
        </InputGroupAddon>
      </InputGroup>
    </CommandPrimitive.Control>
  )
}

const CommandContent = CommandPrimitive.Content

type CommandListProps<
  Option,
  OptGroup = never,
  T extends ValidComponent = "ul"
> = CommandPrimitive.SearchListboxProps<Option, OptGroup, T> & {
  class?: string | undefined
}

const CommandList = <Option, OptGroup = never, T extends ValidComponent = "ul">(
  props: PolymorphicProps<T, CommandListProps<Option, OptGroup, T>>
) => {
  const [local, others] = splitProps(props as CommandListProps<Option>, ["class"])
  return (
    <CommandPrimitive.Listbox
      data-slot="command-list"
      class={cn("cn-command-list overflow-x-hidden overflow-y-auto", local.class)}
      {...others}
    />
  )
}

type CommandEmptyProps<T extends ValidComponent = "div"> =
  CommandPrimitive.SearchNoResultProps<T> & {
    class?: string | undefined
  }

const CommandEmpty = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CommandEmptyProps<T>>
) => {
  const [local, others] = splitProps(props as CommandEmptyProps, ["class"])

  return (
    <CommandPrimitive.NoResult
      data-slot="command-empty"
      class={cn("cn-command-empty", local.class)}
      {...others}
    />
  )
}

type CommandGroupProps<T extends ValidComponent = "li"> = CommandPrimitive.SearchSectionProps<T> & {
  class?: string | undefined
}

const CommandGroup = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, CommandGroupProps<T>>
) => {
  const [local, others] = splitProps(props as CommandGroupProps, ["class"])

  return (
    <CommandPrimitive.Section
      data-slot="command-group"
      class={cn("cn-command-group", local.class)}
      {...others}
    />
  )
}

type CommandItemProps<T extends ValidComponent = "li"> = CommandPrimitive.SearchItemProps<T> &
  Pick<ComponentProps<T>, "class" | "children">

const CommandItem = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, CommandItemProps<T>>
) => {
  const [local, others] = splitProps(props as CommandItemProps, ["class", "children"])

  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      class={cn(
        "cn-command-item group/command-item data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      {...others}
    >
      {local.children}
      <IconPlaceholder
        class="cn-command-item-indicator ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-selected/command-item:opacity-100"
        lucide="CheckIcon"
        tabler="IconCheck"
      />
    </CommandPrimitive.Item>
  )
}

type CommandShortcutProps = ComponentProps<"span">

const CommandShortcut = (props: CommandShortcutProps) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <span data-slot="command-shortcut" class={cn("cn-command-shortcut", local.class)} {...others} />
  )
}

type CommandSeparatorProps = ComponentProps<"div">

const CommandSeparator = (props: CommandSeparatorProps) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="command-separator"
      role="separator"
      class={cn("cn-command-separator", local.class)}
      {...others}
    />
  )
}

const CommandItemLabel = CommandPrimitive.ItemLabel
const CommandItemDescription = CommandPrimitive.ItemDescription

const CommandGroupLabel = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="command-group-label"
      class={cn("cn-command-group-label", local.class)}
      {...others}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandContent,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  CommandItemLabel,
  CommandItemDescription,
  CommandGroupLabel
}
