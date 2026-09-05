import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-6" />
        <div className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Jiban Enterprise. All rights reserved.</p>
          <p>We're launching soon.</p>
        </div>
      </div>
    </footer>
  )
}
