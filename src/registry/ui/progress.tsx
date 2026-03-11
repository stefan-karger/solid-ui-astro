import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as ProgressPrimitive from "@kobalte/core/progress"
import { splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { cn } from "~/lib/utils"

type ProgressProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  ProgressPrimitive.ProgressRootProps<T>
> &
  Pick<ComponentProps<T>, "class" | "children">

const Progress = <T extends ValidComponent = "div">(props: ProgressProps<T>) => {
  const [local, others] = splitProps(props as ProgressProps, ["class"])
  return (
    <ProgressPrimitive.Root data-slot="progress" class={cn("w-full", local.class)} {...others} />
  )
}

type ProgressTrackProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  ProgressPrimitive.ProgressTrackProps<T>
> &
  Pick<ComponentProps<T>, "class" | "children">

const ProgressTrack = <T extends ValidComponent = "div">(props: ProgressTrackProps<T>) => {
  const [local, others] = splitProps(props as ProgressTrackProps, ["class"])
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      class={cn("cn-progress cn-progress-track relative overflow-hidden", local.class)}
      {...others}
    />
  )
}

type ProgressIndicatorProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  ProgressPrimitive.ProgressFillProps<T>
> &
  Pick<ComponentProps<T>, "class">

const ProgressIndicator = <T extends ValidComponent = "div">(props: ProgressIndicatorProps<T>) => {
  const [local, others] = splitProps(props as ProgressIndicatorProps, ["class"])
  return (
    <ProgressPrimitive.Fill
      data-slot="progress-indicator"
      class={cn(
        "cn-progress-indicator h-full w-(--kb-progress-fill-width) transition-all",
        local.class
      )}
      {...others}
    />
  )
}

type ProgressLabelProps<T extends ValidComponent = "span"> = PolymorphicProps<
  T,
  ProgressPrimitive.ProgressLabelProps<T>
> &
  Pick<ComponentProps<T>, "class" | "children">

const ProgressLabel = <T extends ValidComponent = "span">(props: ProgressLabelProps<T>) => {
  const [local, others] = splitProps(props as ProgressLabelProps, ["class"])
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      class={cn("cn-progress-label", local.class)}
      {...others}
    />
  )
}

type ProgressValueProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  ProgressPrimitive.ProgressValueLabelProps<T>
> &
  Pick<ComponentProps<T>, "class">

const ProgressValue = <T extends ValidComponent = "div">(props: ProgressValueProps<T>) => {
  const [local, others] = splitProps(props as ProgressValueProps, ["class"])
  return (
    <ProgressPrimitive.ValueLabel
      data-slot="progress-value"
      class={cn("cn-progress-value", local.class)}
      {...others}
    />
  )
}

export {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
  type ProgressIndicatorProps,
  type ProgressLabelProps,
  type ProgressProps,
  type ProgressTrackProps,
  type ProgressValueProps
}
