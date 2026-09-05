import { ArrowRight, Sparkle } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-primary)/12%,transparent)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge variant="secondary" className="h-6 gap-1.5 px-3 text-[0.7rem] tracking-wide uppercase">
          <Sparkle weight="fill" className="text-primary" />
          Arriving soon
        </Badge>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          We're launching soon.
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Jiban Enterprise is putting the finishing touches on something new.
          Check back soon, or leave us a message and we'll keep you posted.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<a href="#contact" />}>
            Get in touch
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
