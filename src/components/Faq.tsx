import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/ui";

const faqs = [
  {
    id: 1,
    question: "What is your typical project timeline?",
    answer:
      "Most website projects take 6 to 14 business days from our initial conversation to final deployment. Full-stack web applications with dynamic databases and integrations may take 2 to 3 weeks depending on scope.",
  },
  {
    id: 2,
    question: "Do you use templates or custom code?",
    answer:
      "Every project built by CodeWithAbby is engineered with bespoke, clean code using React, Next.js, TypeScript, and Tailwind CSS. We never use bloated page builders or off-the-shelf WordPress templates.",
  },
  {
    id: 3,
    question: "Will I own the complete source code and assets?",
    answer:
      "Yes, 100%. Upon final delivery and signoff, full intellectual property and Git repository ownership are transferred to you with comprehensive documentation.",
  },
  {
    id: 4,
    question: "Do you work with international clients worldwide?",
    answer:
      "Yes. We collaborate with founders and companies across the US, UK, UAE, Europe, and India through asynchronous updates, GitHub staging links, WhatsApp, and scheduled video briefings.",
  },
  {
    id: 5,
    question: "Is post-launch support and maintenance included?",
    answer:
      "Every studio engagement includes 30 days of complimentary post-launch technical support to ensure everything runs smoothly and reliably in production.",
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
      className="relative scroll-mt-24 bg-black text-white py-20 md:py-28 border-t border-white/10"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border-b border-white/[0.06] pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionLabel>Questions</SectionLabel>
              <h2
                id="faq-heading"
                className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              >
                Common Inquiries.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[#86868b]">
              Straightforward answers about our engineering process, pricing approach, and delivery timelines.
            </p>
          </div>
        </Reveal>

        {/* Accordion List */}
        <div className="mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeId === faq.id;
            return (
              <Reveal key={faq.id} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                    isOpen
                      ? "border-[#E44C1F]/40 bg-white/[0.04] shadow-[0_4px_25px_rgba(228,76,31,0.1)]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                  } p-6`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between text-left font-display text-lg font-bold text-white cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#E44C1F] bg-[#E44C1F] text-white"
                          : "border-white/20 text-white/60"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/70 animate-in fade-in duration-200">
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
