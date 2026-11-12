import * as React from "react"
import { CaretDown, List, MagnifyingGlass, X } from "@phosphor-icons/react"
import { cn } from "cn"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { navLinks, services } from "@/lib/content"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-navy">
            {navLinks.map((link, i) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 py-2 transition-colors hover:text-gold",
                    i === 0 &&
                      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-gold"
                  )}
                >
                  {link.label}
                  {link.dropdown && <CaretDown className="size-3" />}
                </a>
                {link.dropdown === "services" && (
                  <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="rounded-lg border border-border bg-white p-2 shadow-lg">
                      {services.map((s) => (
                        <li key={s.title}>
                          <a
                            href="#services"
                            className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-muted hover:text-gold"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Search is a visual stub until there is content to search. */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Search"
            className="hidden rounded-full shadow-sm sm:inline-flex"
          >
            <MagnifyingGlass className="text-navy" />
          </Button>
          <Button
            size="lg"
            className="hidden px-5 sm:inline-flex"
            render={<a href="#contact" />}
          >
            Get In Touch
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <List className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 font-medium text-navy hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <Button
                size="lg"
                className="w-full"
                render={<a href="#contact" onClick={() => setOpen(false)} />}
              >
                Get In Touch
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
