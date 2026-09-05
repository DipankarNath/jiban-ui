import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-heading text-lg font-semibold tracking-tight">
          Jiban Enterprise
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" render={<a href="#contact" />}>
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  )
}
