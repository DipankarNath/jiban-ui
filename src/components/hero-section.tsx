import { ArrowRight } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

/**
 * Background is a swappable photo slot: drop a text-free panorama at
 * public/images/hero.jpg (India skyline → Mt Fuji → pagoda, ~2400px wide).
 * Until then the sunrise gradient below is what shows.
 */
const HERO_IMAGE = "/images/hero.jpg"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#bcd3ec_0%,#e9eef6_38%,#fbe3c4_72%,#f3c48c_100%)]"
      />
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover object-right"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      {/* keeps the left text column readable over any photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-white/80 via-white/40 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24 lg:py-28">
        <div className="flex flex-col items-start gap-5">
          <p className="text-xs font-semibold tracking-[0.12em] text-navy uppercase">
            Welcome to Jiban Enterprise
          </p>
          <h1 className="font-heading text-4xl leading-tight font-semibold text-navy sm:text-5xl">
            Your Trusted Partner{" "}
            <br className="hidden sm:block" />
            for a Smarter Tomorrow
          </h1>
          <p className="max-w-md text-base leading-relaxed text-navy/90">
            From e-commerce and consumer products to digital solutions,
            import-export, and more — we connect people, ideas and
            opportunities across India, Japan and beyond.
          </p>
          <Button size="lg" className="mt-2 h-11 px-6 shadow-md" render={<a href="#services" />}>
            Explore Our Services
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="hidden items-start justify-center pt-4 md:flex">
          <p className="-rotate-12 font-script text-4xl leading-tight text-navy lg:text-5xl">
            Building Trust
            <br />
            <span className="ml-6">Across Borders</span>
            <span className="mt-1 ml-10 block h-0.5 w-48 -rotate-3 rounded-full bg-gold" />
          </p>
        </div>
      </div>
    </section>
  )
}
