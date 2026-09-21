import { useReducedMotion, motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { site } from "@/data/site";
import { easeOutExpo } from "@/lib/motion";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em]",
        light ? "text-white/80" : "text-muted",
        className,
      )}
    >
      <span className="text-[10px] text-accent" aria-hidden>
        ✱
      </span>
      {children}
    </p>
  );
}

export function Plus({ className }: { className?: string }) {
  return (
    <span
      className={cn("pointer-events-none inline-flex h-3 w-3 text-white/80", className)}
      aria-hidden
    >
      <svg viewBox="0 0 12 12" fill="none" className="h-full w-full">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.15" />
      </svg>
    </span>
  );
}

export function Asterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("text-border", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M40 6v68M8 40h64M16.5 16.5l47 47M63.5 16.5l-47 47"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("h-4 w-4", className)}
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.85, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

/** Replace /images/portrait.jpg to swap the photograph. Layout stays the same. */
export function Portrait({
  className,
  sizes,
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={site.portrait.src}
      alt={site.portrait.alt}
      width={site.portrait.width}
      height={site.portrait.height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      draggable={false}
      className={cn(
        "h-full w-full object-cover object-[center_12%]",
        className,
      )}
    />
  );
}
