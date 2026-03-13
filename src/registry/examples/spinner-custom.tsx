import { splitProps, type ComponentProps } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { cn } from "~/lib/utils"

const CustomSpinner = (props: ComponentProps<"svg">) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <IconPlaceholder
      role="status"
      aria-label="Loading"
      class={cn("size-4 animate-spin", local.class)}
      lucide="LoaderIcon"
      tabler="IconLoader2"
      {...others}
    />
  )
}

export default function SpinnerCustom() {
  return (
    <div class="flex items-center gap-4">
      <CustomSpinner />
    </div>
  )
}
