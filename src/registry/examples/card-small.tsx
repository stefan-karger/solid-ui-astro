import { Button } from "~/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/registry/ui/card"

export default function CardSmall() {
  return (
    <Card class="w-full max-w-sm" size="sm">
      <CardHeader>
        <CardTitle>Starter plan</CardTitle>
        <CardDescription>Perfect for personal projects and prototypes.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-semibold">$9</p>
        <p class="text-sm text-muted-foreground">per month</p>
      </CardContent>
      <CardFooter>
        <Button class="w-full" size="sm">
          Choose plan
        </Button>
      </CardFooter>
    </Card>
  )
}
