import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds — keeps a section's parts arriving in rhythm. */
  delay?: number;
  variant?: "up" | "in" | "scale";
};

/**
 * Wraps content in a soft, scroll-triggered entrance: the block rises and
 * settles into place, then stays still.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal",
        variant === "in" && "reveal-in",
        variant === "scale" && "reveal-scale",
        visible && "reveal-visible",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
