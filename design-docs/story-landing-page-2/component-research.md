## Installation Commands:
```bash
bunx shadcn@latest add @shadcn/button @shadcn/card @shadcn/avatar @shadcn/scroll-area @shadcn/navigation-menu @shadcn/badge @shadcn/separator
```

Component: Button  
Implementation:
- Files: 1 (`@shadcn` registry/ui/button)
- Dependencies: `@radix-ui/react-slot`
Best Example:
```tsx
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```
Key Props: `variant` (e.g., `outline`, `ghost`, `link`), `size` (`default`, `sm`, `lg`, `icon`), `asChild` for Radix slot composition.

Component: Card  
Implementation:
- Files: 1 (`@shadcn` registry/ui/card)
Best Example:
```tsx
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
```
Key Props: `Card`, subcomponents `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`, `CardAction`; supports standard `className` overrides.

Component: Avatar  
Implementation:
- Files: 1 (`@shadcn` registry/ui/avatar)
- Dependencies: `@radix-ui/react-avatar`
Best Example:
```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
```
Key Props: `AvatarImage` (accepts `src`, `alt`), `AvatarFallback` (render initials/placeholder), custom `className` for shape/styling.

Component: Scroll Area  
Implementation:
- Files: 1 (`@shadcn` registry/ui/scroll-area)
- Dependencies: `@radix-ui/react-scroll-area`
Best Example:
```tsx
import * as React from "react"

import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
```
Key Props: `className` to set scroll dimensions; includes `ScrollBar` component for optional custom scrollbars (horizontal/vertical).

Component: Navigation Menu  
Implementation:
- Files: 1 (`@shadcn` registry/ui/navigation-menu)
- Dependencies: `@radix-ui/react-navigation-menu`
Best Example:
```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu"

export default function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* Additional list items */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Additional NavigationMenuItem entries */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```
Key Props: `NavigationMenu` with optional `viewport` prop for responsive behavior; composed with `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`.

Component: Badge  
Implementation:
- Files: 1 (`@shadcn` registry/ui/badge)
- Dependencies: `@radix-ui/react-slot`
Best Example:
```tsx
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          8
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
    </div>
  )
}
```
Key Props: `variant` (`default`, `secondary`, `destructive`, `outline`), `className` for tone/shape overrides, can include icons as children.

Component: Separator  
Implementation:
- Files: 1 (`@shadcn` registry/ui/separator)
- Dependencies: `@radix-ui/react-separator`
Best Example:
```tsx
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
```
Key Props: `orientation` (`horizontal`, `vertical`), `decorative` flag (for purely visual use), standard `className` for thickness/spacing.

Component: Timeline Pattern (Custom)  
Implementation: No direct shadcn component. Compose using `Card` for steps, `Separator` for connectors, and Tailwind grid/flex utilities; integrate Framer Motion for progressive reveal.
Best Example: N/A — design requires bespoke layout inspired by `Card` and `Separator` patterns; reference `HowItWorks` timeline in design spec.
Key Props: Determine custom API (e.g., `steps[]`) in bespoke component; ensure accessible sequencing and responsive stacking.

Component: Marquee Animation (Custom)  
Implementation: No registry component. Build with `ScrollArea` wrapper plus Framer Motion `motion.div` for continuous animation; add `prefers-reduced-motion` guard.
Best Example: N/A — rely on custom motion implementation with existing utilities.
Key Props: Animation duration/speed controls, pause-on-hover, mobile fallback using native horizontal scroll (`ScrollArea`).
