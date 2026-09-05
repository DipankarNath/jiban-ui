import type { Icon } from "@phosphor-icons/react"
import { Bell, Clock, Heart } from "@phosphor-icons/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Highlight = {
  icon: Icon
  title: string
  description: string
}

const highlights: Highlight[] = [
  {
    icon: Clock,
    title: "Worth the wait",
    description: "We're taking the time to get things right before we open our doors.",
  },
  {
    icon: Heart,
    title: "Built with care",
    description: "Every detail is being put together thoughtfully, from the ground up.",
  },
  {
    icon: Bell,
    title: "Stay in the loop",
    description: "Reach out and we'll make sure you're among the first to know.",
  },
]

export function HighlightsSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: HighlightIcon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HighlightIcon weight="duotone" className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
