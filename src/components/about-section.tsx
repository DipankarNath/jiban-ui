import { ArrowRight, Globe, Lightbulb, ShieldCheck, UsersThree } from "@phosphor-icons/react"

import { SectionEyebrow } from "@/components/section-eyebrow"
import { Button } from "@/components/ui/button"

const values = [
  { icon: ShieldCheck, label: "Trust & Integrity" },
  { icon: UsersThree, label: "Customer Focused" },
  { icon: Lightbulb, label: "Innovation & Growth" },
  { icon: Globe, label: "Global Perspective" },
]

export function AboutSection() {
  return (
    <section id="about" className="grid bg-white md:grid-cols-2">
      {/* Placeholder cropped from the mockup — replace with a high-res photo. */}
      <img
        src="/images/about.jpg"
        alt="Laptop showing the JIBAN Enterprise logo on a desk"
        className="h-64 w-full object-cover md:h-full"
      />
      <div className="px-4 py-14 sm:px-10 lg:px-14 lg:py-16">
        <SectionEyebrow align="left">About Us</SectionEyebrow>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          JIBAN Enterprise
        </h2>
        <p className="mt-4 leading-relaxed text-foreground/85">
          <strong className="text-navy">JIBAN Enterprise</strong> is a
          multi-sector business organization committed to delivering quality
          products and reliable services. We integrate technology, trade and
          innovation to create value for our customers and partners.
        </p>
        <p className="mt-3 leading-relaxed text-foreground/85">
          As a bridge between India and Japan, we also explore global
          opportunities while supporting local growth.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:divide-x sm:divide-border">
          {values.map(({ icon: ValueIcon, label }) => (
            <li key={label} className="flex items-center gap-2 sm:px-3 sm:first:pl-0">
              <ValueIcon className="size-8 shrink-0 text-navy" />
              <span className="text-xs leading-tight text-navy">{label}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          size="lg"
          className="mt-8 h-11 border-gold px-6 text-gold hover:bg-gold-soft hover:text-gold"
          render={<a href="#contact" />}
        >
          Learn More About Us
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}
