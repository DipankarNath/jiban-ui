import { Globe, Handshake, ShieldCheck, Star, UsersThree } from "@phosphor-icons/react"

import { SectionEyebrow } from "@/components/section-eyebrow"

const reasons = [
  { icon: Handshake, label: "Multi-Sector Expertise" },
  { icon: Globe, label: "India & Japan Connection" },
  { icon: ShieldCheck, label: "Quality Products & Services" },
  { icon: UsersThree, label: "Trusted by Customers" },
  { icon: Star, label: "Long-Term Partnerships" },
]

export function WhySection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep px-4 py-14 text-white sm:px-6">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_85%_0%,rgba(255,255,255,0.10),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl text-center">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>
        <h2 className="mt-3 font-heading text-3xl font-semibold">
          Your Growth, Our Commitment
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
          {reasons.map(({ icon: ReasonIcon, label }) => (
            <li key={label} className="flex flex-col items-center gap-3 px-4">
              <ReasonIcon className="size-9 text-gold" />
              <span className="max-w-32 text-sm leading-snug font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
