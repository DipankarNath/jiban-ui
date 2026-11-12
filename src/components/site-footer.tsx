import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react"

import { Logo } from "@/components/logo"
import { contact } from "@/lib/content"

const linkCols = [
  [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Products", href: "#services" },
  ],
  [
    { label: "Blog & Insights", href: "#news" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
]

// Social URLs are placeholders until the client supplies their profiles.
const socials = [
  { icon: FacebookLogo, label: "Facebook", className: "bg-[#1877f2]" },
  { icon: InstagramLogo, label: "Instagram", className: "bg-linear-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
  { icon: YoutubeLogo, label: "YouTube", className: "bg-[#ff0000]" },
  { icon: LinkedinLogo, label: "LinkedIn", className: "bg-[#0a66c2]" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.4fr_1fr] lg:divide-x lg:divide-white/15">
        <div className="lg:pr-6">
          <Logo variant="dark" />
        </div>

        <address className="space-y-3 text-sm not-italic lg:px-6">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
            <Phone weight="fill" className="size-4 text-gold" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
            <EnvelopeSimple weight="fill" className="size-4 text-gold" />
            {contact.email}
          </a>
          <p className="flex gap-3">
            <MapPin weight="fill" className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>
              {contact.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </span>
          </p>
        </address>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-6 text-sm lg:px-6">
          {linkCols.map((col, i) => (
            <ul key={i} className="space-y-2.5">
              {col.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="lg:pl-6">
          <p className="font-semibold text-white">Follow Us</p>
          <ul className="mt-3 flex gap-2.5">
            {socials.map(({ icon: SocialIcon, label, className }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className={`flex size-9 items-center justify-center rounded-full text-white transition hover:scale-105 ${className}`}
                >
                  <SocialIcon weight="fill" className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/70">Building Trust Across Borders</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/70 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} JIBAN Enterprise. All rights reserved.</p>
          <p className="flex gap-2">
            <span>India</span>|<span>Japan</span>|<span>World</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
