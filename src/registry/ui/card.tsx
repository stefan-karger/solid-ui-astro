import { splitProps, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"

type CardProps = ComponentProps<"div"> & {
  size?: "default" | "sm"
}

const Card = (props: CardProps) => {
  const [local, others] = splitProps(props, ["class", "size"])
  return (
    <div
      class={cn("group/card cn-card flex flex-col border", local.class)}
      data-size={local.size === "sm" ? "sm" : undefined}
      data-slot="card"
      {...others}
    />
  )
}

const CardHeader = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn("cn-card-header grid auto-rows-min items-start", local.class)}
      data-slot="card-header"
      {...others}
    />
  )
}

const CardTitle = (props: ComponentProps<"h3">) => {
  const [local, others] = splitProps(props, ["class"])
  return <h3 class={cn("cn-card-title", local.class)} data-slot="card-title" {...others} />
}

const CardDescription = (props: ComponentProps<"p">) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <p class={cn("cn-card-description", local.class)} data-slot="card-description" {...others} />
  )
}

const CardContent = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={cn("cn-card-content", local.class)} data-slot="card-content" {...others} />
}

const CardFooter = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={cn("cn-card-footer", local.class)} data-slot="card-footer" {...others} />
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, type CardProps }
