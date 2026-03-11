import { Button } from "~/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/registry/ui/card"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function CardDemo() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="card-email">Email</Label>
          <Input id="card-email" placeholder="name@example.com" type="email" />
        </div>
        <div class="grid gap-2">
          <Label for="card-password">Password</Label>
          <Input id="card-password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}
