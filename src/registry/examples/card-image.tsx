import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/registry/ui/card"

export default function CardImage() {
  return (
    <Card class="w-full max-w-sm">
      <img
        alt="Abstract gradient card artwork"
        class="h-44 w-full object-cover"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%234f46e5'/%3E%3Cstop offset='1' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23g)'/%3E%3Ccircle cx='640' cy='110' r='120' fill='%23ffffff22'/%3E%3Ccircle cx='130' cy='340' r='150' fill='%2300000020'/%3E%3C/svg%3E"
      />
      <CardHeader>
        <CardTitle>Featured destination</CardTitle>
        <CardDescription>Kyoto, Japan</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Explore quiet temples, seasonal gardens, and traditional streets in one itinerary.
        </p>
      </CardContent>
      <CardFooter>
        <a class="text-sm font-medium underline underline-offset-4" href="#">
          View details
        </a>
      </CardFooter>
    </Card>
  )
}
