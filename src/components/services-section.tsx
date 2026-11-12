import { ArrowRight } from "@phosphor-icons/react"
import { cn } from "cn"

import { SectionEyebrow } from "@/components/section-eyebrow"
import { services } from "@/lib/content"

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/60 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            Multi-Sector Business Solutions
          </h2>
          <p className="mt-3 text-muted-foreground">
            We offer a wide range of products and services to support your
            business, lifestyle and global aspirations.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: ServiceIcon, title, description, tone }) => (
            <li
              key={title}
              className="group relative flex gap-5 rounded-lg border border-border bg-white p-6 pb-10 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={cn(
                  "flex size-14 shrink-0 items-center justify-center rounded-full text-white",
                  tone === "green" ? "bg-[#1f6b3a]" : "bg-navy"
                )}
              >
                <ServiceIcon weight="duotone" className="size-7 text-gold-soft" />
              </span>
              <div>
                <h3 className="font-heading text-lg leading-snug font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <ArrowRight
                aria-hidden
                className="absolute right-5 bottom-4 size-4 text-gold transition group-hover:translate-x-1"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
