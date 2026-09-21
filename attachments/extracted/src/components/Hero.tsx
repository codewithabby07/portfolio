import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { featuredProject } from "@/data/projects";
import { ArrowIcon, Plus, Portrait } from "@/components/ui";
import { easeOutExpo } from "@/lib/motion";

const plusMarks = [
  { x: "25%", y: "33.333%" },
  { x: "50%", y: "33.333%" },
  { x: "75%", y: "33.333%" },
  { x: "25%", y: "66.666%" },
  { x: "50%", y: "66.666%" },
  { x: "75%", y: "66.666%" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-hero text-white"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 z-[15] opacity-70" aria-hidden />

      {plusMarks.map((mark) => (
        <span
          key={`${mark.x}-${mark.y}`}
          className="pointer-events-none absolute z-[16] -translate-x-1/2 -translate-y-1/2"
          style={{ left: mark.x, top: mark.y }}
          aria-hidden
        >
          <Plus />
        </span>
      ))}

      <motion.p
        aria-hidden
        className="display pointer-events-none absolute top-[18%] left-1/2 z-0 -translate-x-1/2 text-[28vw] whitespace-nowrap text-white/15 select-none md:text-[19vw]"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: easeOutExpo }}
      >
        {site.name.toUpperCase()}
      </motion.p>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[62%] max-w-[640px] bg-hero md:right-[6%] md:left-auto md:h-[92%] md:w-[min(56vw,720px)] md:max-w-none"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.35, ease: easeOutExpo }}
      >
        <Portrait
          priority
          sizes="(min-width: 768px) 52vw, 100vw"
          className="h-full w-full"
        />
      </motion.div>

      <div className="page-shell relative z-20 flex min-h-[100svh] flex-col pt-[5.5rem] pb-8 md:pb-10">
        <div className="flex flex-1 flex-col justify-between gap-8 md:grid md:grid-cols-12 md:items-stretch">
          <motion.p
            className="relative max-w-[13.5rem] pt-6 text-[11px] leading-relaxed font-medium tracking-[0.16em] uppercase text-white/90 md:col-span-3 md:pt-[22vh]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: easeOutExpo }}
          >
            <Plus className="absolute -top-3 -left-4 hidden text-white/80 md:inline-flex" />
            {site.hero.tagline}
          </motion.p>

          <div className="hidden md:col-span-6 md:block" />

          <motion.aside
            className="relative hidden justify-self-end md:col-span-3 md:mt-[18vh] md:block"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: easeOutExpo }}
          >
            <a
              href="#work"
              className="relative block w-[168px] bg-white p-2 text-dark shadow-sm"
            >
              <Plus className="absolute -top-1.5 -left-1.5 text-white" />
              <Plus className="absolute -top-1.5 -right-1.5 text-white" />
              <Plus className="absolute -bottom-1.5 -left-1.5 text-white" />
              <Plus className="absolute -bottom-1.5 -right-1.5 text-white" />
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} project still`}
                className="aspect-square w-full object-cover"
                width={320}
                height={320}
                loading="eager"
              />
              <div className="flex items-center justify-between pt-2 text-[10px] tracking-[0.12em] uppercase">
                <span className="font-semibold">{featuredProject.title}</span>
                <span className="text-muted">/{featuredProject.category.split(" ")[0]}</span>
              </div>
            </a>
          </motion.aside>
        </div>

        <div className="relative z-20 mt-auto grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <motion.p
              className="mb-2 font-sans text-[11px] tracking-[0.18em] text-white/80"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              ©{site.hero.year}
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="display text-[clamp(4.8rem,16vw,13rem)] text-white"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: easeOutExpo }}
            >
              {site.name.toUpperCase()}
              <span className="sr-only"> — {site.brand}, web developer</span>
            </motion.h1>
          </div>

          <motion.a
            href="#contact"
            className="group relative flex w-full max-w-[280px] items-center gap-3 rounded-md bg-dark p-2 pr-2 text-white md:col-span-4 md:ml-auto"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: easeOutExpo }}
          >
            <span className="h-12 w-12 shrink-0 overflow-hidden rounded-sm">
              <Portrait className="h-full w-full object-[center_18%]" sizes="48px" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] tracking-[0.14em] text-white/55 uppercase">
                Let's Talk
              </span>
              <span className="block truncate text-sm font-semibold">{site.name}</span>
              <span className="block text-[11px] text-white/55">{site.jobTitle}</span>
            </span>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white text-dark transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowIcon />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
