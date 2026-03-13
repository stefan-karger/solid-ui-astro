import { Badge } from "~/registry/ui/badge"
import { Button } from "~/registry/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~/registry/ui/card"

export default function CardImage() {
  return (
    <Card class="relative mx-auto w-full max-w-sm pt-0">
      <div class="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        alt="Event cover"
        class="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        src="https://avatar.vercel.sh/shadcn1"
      />
      <CardHeader class="grid-cols-[1fr_auto]">
        <div class="col-start-2 row-span-2 row-start-1 self-start">
          <Badge variant="secondary">Featured</Badge>
        </div>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button class="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}
