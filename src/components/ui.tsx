import { useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/motion";
import { site } from "@/data/site";

export function SectionLabel({
  children,
  className,
  light = false,
  symbol = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
  symbol?: boolean;
}) {
  return (
    <p
      className={cn(
        "label-meta flex items-center gap-2",
        light ? "text-white/80" : "text-muted",
        className,
      )}
    >
      {symbol ? (
        <span className="text-[10px] text-accent" aria-hidden>
          ✱
        </span>
      ) : null}
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function MediaReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cn("media-reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function LineReveal({
  lines,
  className,
  delay = 0,
  stagger = 0.1,
}: {
  lines: readonly string[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  return (
    <span ref={ref} className={cn("reveal", inView && "is-in", className)}>
      {lines.map((line, index) => (
        <span key={line} className="line-mask">
          <span
            className="line-inner"
            style={{ transitionDelay: `${delay + index * stagger}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

export function CharReveal({
  text,
  className,
  delay = 0,
  stagger = 0.07,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "p";
}) {
  return (
    <Tag className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span key={`${char}-${index}`} className="char-mask" aria-hidden>
          <span
            className="char-inner"
            style={{ animationDelay: `${delay + index * stagger}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="char-mask">
          <span
            className="char-inner"
            style={{ animationDelay: `${delay + index * stagger}s` }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Portrait({
  className,
  sizes,
  priority = false,
  style,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
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
      className={cn("h-full w-full object-cover object-[center_12%]", className)}
      style={style}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Handwritten Organic SVG Underline & Swoosh
   ───────────────────────────────────────────────────────────── */
export function HandwrittenUnderline({
  className,
  color = "#E44C1F",
  variant = "swoosh",
}: {
  className?: string;
  color?: string;
  variant?: "swoosh" | "wave" | "double" | "highlight";
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute -bottom-2.5 left-0 w-full h-3 sm:h-4 overflow-visible z-10",
        className
      )}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {variant === "swoosh" && (
        <path
          d="M 3 14 C 50 3, 150 20, 237 8 C 170 17, 90 20, 15 16"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 [stroke-dashoffset:0]" : "opacity-0 [stroke-dashoffset:320]"
          )}
          style={{ strokeDasharray: 320 }}
        />
      )}
      {variant === "wave" && (
        <path
          d="M 3 14 Q 30 4, 60 14 T 120 14 T 180 14 T 237 12"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 [stroke-dashoffset:0]" : "opacity-0 [stroke-dashoffset:320]"
          )}
          style={{ strokeDasharray: 320 }}
        />
      )}
      {variant === "double" && (
        <>
          <path
            d="M 4 11 C 60 4, 160 16, 236 8"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className={cn(
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 [stroke-dashoffset:0]" : "opacity-0 [stroke-dashoffset:320]"
            )}
            style={{ strokeDasharray: 320 }}
          />
          <path
            d="M 12 18 C 80 12, 180 22, 228 14"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            className={cn(
              "transition-all duration-1000 ease-out delay-150",
              inView ? "opacity-80 [stroke-dashoffset:0]" : "opacity-0 [stroke-dashoffset:320]"
            )}
            style={{ strokeDasharray: 320 }}
          />
        </>
      )}
      {variant === "highlight" && (
        <path
          d="M 2 15 C 70 8, 170 12, 238 9"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.65"
          className={cn(
            "transition-all duration-1000 ease-out",
            inView ? "opacity-65 [stroke-dashoffset:0]" : "opacity-0 [stroke-dashoffset:320]"
          )}
          style={{ strokeDasharray: 320 }}
        />
      )}
    </svg>
  );
}

export function HandwrittenWord({
  children,
  className,
  underlineClassName,
  color = "#E44C1F",
  variant = "swoosh",
}: {
  children: ReactNode;
  className?: string;
  underlineClassName?: string;
  color?: string;
  variant?: "swoosh" | "wave" | "double" | "highlight";
}) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span>{children}</span>
      <HandwrittenUnderline
        color={color}
        variant={variant}
        className={underlineClassName}
      />
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Scroll Mask Word Reveal (Matching NEV Showcase .mask .mw)
   ───────────────────────────────────────────────────────────── */
export function MaskScrollReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  children: string | ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  if (typeof children === "string") {
    const words = children.split(" ");
    const Component = Tag as any;
    return (
      <Component
        ref={ref}
        className={cn("mask-reveal-container", inView && "is-in", className)}
      >
        {words.map((word, idx) => (
          <span key={idx} className="mwrap">
            <span
              className="mw"
              style={{
                transitionDelay: inView ? `${delay + idx * 0.045}s` : "0s",
              }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </Component>
    );
  }

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={cn("mwrap", inView && "is-in", className)}
    >
      <span
        className="mw"
        style={{
          transitionDelay: inView ? `${delay}s` : "0s",
        }}
      >
        {children}
      </span>
    </Component>
  );
}
