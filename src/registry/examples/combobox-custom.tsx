import { IconPlaceholder } from "~/components/icon-placeholder"
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemText,
  ComboboxList,
  ComboboxTrigger
} from "~/registry/ui/combobox"

type Repository = {
  value: string
  label: string
  description: string
  iconLucide: string
  iconTabler: string
}

const repositories: Repository[] = [
  {
    value: "design-system",
    label: "design-system",
    description: "Shared components and tokens",
    iconLucide: "PaletteIcon",
    iconTabler: "IconPalette"
  },
  {
    value: "marketing-site",
    label: "marketing-site",
    description: "Landing pages and content",
    iconLucide: "MegaphoneIcon",
    iconTabler: "IconSpeakerphone"
  },
  {
    value: "analytics-api",
    label: "analytics-api",
    description: "Event ingestion service",
    iconLucide: "ChartNoAxesColumnIcon",
    iconTabler: "IconChartBar"
  }
]

export default function ComboboxCustom() {
  return (
    <Combobox<Repository>
      options={repositories}
      optionValue="value"
      optionLabel="label"
      optionTextValue="label"
      placeholder="Select a repository"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>
          <IconPlaceholder
            class="size-4 text-muted-foreground"
            lucide={props.item.rawValue.iconLucide}
            tabler={props.item.rawValue.iconTabler}
          />
          <ComboboxItemText class="flex-col gap-0">
            <span class="font-medium">{props.item.rawValue.label}</span>
            <span class="text-xs text-muted-foreground">{props.item.rawValue.description}</span>
          </ComboboxItemText>
        </ComboboxItem>
      )}
    >
      <ComboboxControl class="max-w-md">
        <ComboboxInput />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList />
        <ComboboxEmpty>No repository found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}
