import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SliderPrimitive from "@kobalte/core/slider"
import { For, mergeProps, splitProps, type ComponentProps, type ValidComponent } from "solid-js"

import { cn } from "~/lib/utils"

type SliderProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  Omit<SliderPrimitive.SliderRootProps<T>, "minValue" | "maxValue">
> &
  Pick<ComponentProps<T>, "class"> & {
    min?: number
    max?: number
  }

const Slider = <T extends ValidComponent = "div">(rawProps: SliderProps<T>) => {
  const props = mergeProps(
    {
      defaultValue: [50],
      min: 0,
      max: 100,
      step: 1,
      orientation: "horizontal" as const
    },
    rawProps
  )

  const [local, others] = splitProps(props as SliderProps, [
    "class",
    "value",
    "defaultValue",
    "min",
    "max"
  ])

  const thumbs = () => local.value ?? local.defaultValue ?? [local.min]

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      class={cn(
        "cn-slider relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col",
        local.class
      )}
      value={local.value}
      defaultValue={local.defaultValue}
      minValue={local.min}
      maxValue={local.max}
      {...others}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        class="cn-slider-track relative grow overflow-hidden"
      >
        <SliderPrimitive.Fill
          data-slot="slider-range"
          class="cn-slider-range absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
        />
      </SliderPrimitive.Track>
      <For each={thumbs()}>
        {() => (
          <SliderPrimitive.Thumb data-slot="slider-thumb" class="cn-slider-thumb block">
            <SliderPrimitive.Input />
          </SliderPrimitive.Thumb>
        )}
      </For>
    </SliderPrimitive.Root>
  )
}

export { Slider, type SliderProps }
