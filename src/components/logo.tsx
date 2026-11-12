import { cn } from "cn"

/**
 * Recreation of the "Ji" mark from the mockup. Swap for the client's real
 * logo file (SVG preferred) once supplied.
 */
export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark"
  className?: string
}) {
  const onDark = variant === "dark"
  return (
    <a
      href="#top"
      aria-label="JIBAN Enterprise — home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden
        className={cn(
          "relative flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] font-heading text-2xl font-bold italic",
          onDark
            ? "border-gold bg-white text-navy"
            : "border-navy bg-white text-navy"
        )}
      >
        <span className="-ml-1">J</span>
        <span className="-ml-0.5 text-gold">i</span>
        <span className="absolute inset-x-1 bottom-1.5 h-0.5 -rotate-12 rounded-full bg-gold" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-2xl font-bold tracking-wide",
            onDark ? "text-white" : "text-navy"
          )}
        >
          JIBAN
        </span>
        <span className="font-heading text-lg leading-tight text-gold">
          Enterprise
        </span>
        <span
          className={cn(
            "mt-0.5 flex items-center gap-1 whitespace-nowrap text-[0.55rem] font-semibold tracking-wide",
            onDark ? "text-white/80" : "text-navy"
          )}
        >
          <span className="h-px w-4 bg-gold" />
          Building Trust Across Borders
        </span>
      </span>
    </a>
  )
}
