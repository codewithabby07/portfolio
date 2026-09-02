import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui";

const faqs = [
  {
    id: 1,
    question: "What is your typical project timeline?",
    answer:
      "I deliver high-converting custom websites and full stack web applications in just 6 to 7 days, maintaining enterprise-grade engineering, 99+ speed, and aesthetic standards.",
  },
  {
    id: 2,
    question: "How does the engagement & payment process work?",
    answer:
      "Projects are structured in transparent, milestone-based phases: Discovery & Architecture → Design Approval → Full Development & Testing → Final Handover & Deployment.",
  },
  {
    id: 3,
    question: "Do you work with international clients worldwide?",
    answer:
      "Yes, absolutely. I collaborate seamlessly with founders, businesses, and agency partners across the US, UK, UAE, Europe, and India via asynchronous updates, email, and direct calls.",
  },
  {
    id: 4,
    question: "Is post-launch support and maintenance included?",
    answer:
      "Every project includes 30 days of complimentary post-launch technical support, bug resolution, and performance monitoring to ensure zero downtime and total peace of mind.",
  },
  {
    id: 5,
    question: "Can you optimize my existing website for 99+ speed & SEO?",
    answer:
      "Yes. I specialize in transforming slow, legacy codebases into modern Next.js/React applications with 99+ Lighthouse scores, instant page loads, and search engine accessibility.",
  },
];

export function Faq() {
  const [activeId, setActiveId] = useState<number | null>(1);

  function toggle(id: number) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-dark text-white py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="page-shell">
        <Reveal>
          <SectionLabel light>Clarity & Trust.</SectionLabel>
          <div className="mt-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <h2
              id="faq-heading"
              className="display text-5xl leading-none text-white md:text-7xl"
            >
              FREQUENTLY ASKED{" "}
              <em
                className="not-italic text-accent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Questions.
              </em>
            </h2>
            <p className="max-w-xs text-sm text-white/50 md:text-right">
              Everything you need to know before getting started.
            </p>
          </div>
        </Reveal>

        {/* Accordion List */}
        <div className="mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeId === faq.id;
            return (
              <Reveal key={faq.id} delay={i * 0.08}>
                <div className="border-b border-white/10 pb-4 transition-colors duration-300">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-lg font-bold text-white md:text-xl"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-2 pb-2 text-base leading-relaxed text-white/60 transition-opacity duration-300">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
