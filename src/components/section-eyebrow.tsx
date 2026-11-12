import { cn } from "cn"

/** Small uppercase label with gold rules, e.g. "— OUR SERVICES —". */
export function SectionEyebrow({
  children,
  align = "center",
  className,
}: {
  children: React.ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-gold uppercase",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="h-px w-8 bg-gold sm:w-12" />
      {children}
      {align === "center" && <span className="h-px w-8 bg-gold sm:w-12" />}
    </p>
  )
}
