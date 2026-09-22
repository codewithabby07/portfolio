import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast, ToastMessage, copyToClipboard } from "@/components/Toast";
import { Reveal } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact CodeWithAbby | Direct Founder Web Engineering & Inquiries" },
      {
        name: "description",
        content:
          "Start your website project with CodeWithAbby. Direct collaboration with Syed Abbas Ali for high-performance custom websites, React/Next.js platforms, and commercial web applications.",
      },
      { property: "og:title", content: "Contact CodeWithAbby | Direct Founder Collaboration" },
      {
        property: "og:description",
        content:
          "Start your website project with CodeWithAbby. Direct collaboration with Syed Abbas Ali for high-performance custom websites, React/Next.js platforms, and commercial web applications.",
      },
      { property: "og:url", content: `${site.url}/contact` },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact CodeWithAbby | Direct Founder Collaboration" },
      { name: "twitter:description", content: "Start your custom web development project with Syed Abbas Ali." },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
  }),
});

const PROJECT_TYPES = [
  { id: "custom-website", label: "Custom Website", icon: "🌐", turn: "1–2 Weeks" },
  { id: "web-app", label: "Web Application", icon: "⚡", turn: "2–4 Weeks" },
  { id: "3d-webgl", label: "3D / WebGL Experience", icon: "✨", turn: "2–3 Weeks" },
  { id: "ecommerce", label: "E-Commerce Flagship", icon: "🛍️", turn: "2–3 Weeks" },
  { id: "redesign", label: "Website Redesign & Speed", icon: "🚀", turn: "1–2 Weeks" },
];

const TIMELINES = [
  { id: "fast", label: "Fast Sprint (1–2 Weeks)", badge: "High Priority" },
  { id: "standard", label: "Standard (2–4 Weeks)", badge: "Recommended" },
  { id: "flexible", label: "Flexible / Planning Phase", badge: "Discovery" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Scope Lock",
    desc: "We align on your product vision, target audience, reference sites, and exact deliverables.",
    tag: "Day 1",
  },
  {
    num: "02",
    title: "Service Agreement & Contract",
    desc: "We sign a mutual service agreement locking the scope, timeline, and exact deliverables before work begins.",
    tag: "Contract First",
    highlight: true,
  },
  {
    num: "03",
    title: "25% Advance Milestone",
    desc: "A 25% initial milestone deposit is issued upon agreement to reserve your dedicated build sprint.",
    tag: "Sprint Kickoff",
  },
  {
    num: "04",
    title: "Development & Staging Previews",
    desc: "Syed Abbas Ali builds your codebase in React/Next.js with live preview URLs for continuous review.",
    tag: "Active Sprint",
  },
  {
    num: "05",
    title: "QA, Handover & 75% Final",
    desc: "Full device testing, final 75% settlement after handover, and 100% GitHub repository transfer.",
    tag: "Handover",
  },
];

const FAQS = [
  {
    q: "How does our engagement process work?",
    a: "We operate on an Agreement-First model: A formal mutual service agreement and scope lock are signed before any development starts, ensuring complete timeline guarantees, transparency, and security for both parties.",
  },
  {
    q: "What is the payment milestone breakdown?",
    a: "We follow a 25% advance and 75% post-handover structure: 25% deposit upon signing the mutual service agreement, and the remaining 75% only after final staging approval and handover.",
  },
  {
    q: "Will I own 100% of the code and repository?",
    a: "Yes, absolutely. You receive complete GitHub repository ownership, full rights to custom design systems, and deployment access on your Vercel or cloud account with zero recurring studio fees.",
  },
  {
    q: "How fast can we start?",
    a: "Once the scope is agreed upon and the service agreement is executed, kickoff occurs within 24 to 48 hours.",
  },
];

const FORMSPREE_ID = "xqpkbabk";

function ContactPage() {
  const { showToast, toast } = useToast();
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].label);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[0].label);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast("Please enter your name and email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      showToast("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || "Not provided",
          projectType: selectedType,
          timeline: selectedTimeline,
          message: message.trim() || "Discussing new project with agreement lock.",
          source: "CodeWithAbby Contact Page Form",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        showToast("Project brief sent directly to Syed Abbas Ali's email!");
      } else {
        showToast("Could not send brief. Please try again or email codewithabby07@gmail.com");
      }
    } catch {
      showToast("Network error. Please try again or email codewithabby07@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCopyEmail() {
    copyToClipboard(site.email, () => {
      showToast(`Email copied: ${site.email}`);
    });
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#E44C1F] selection:text-white">
      <ToastMessage message={toast} />
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header (Clean, professional without badge pills) */}
          <Reveal>
            <div className="border-b border-neutral-200 pb-10">
              <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.05]">
                Let’s Build <span className="text-[#E44C1F]">Something Great</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-sans">
                Work directly with Syed Abbas Ali. No agency bureaucracy, no junior developers. Clear agreement upfront, guaranteed delivery, and 100% code ownership.
              </p>
            </div>
          </Reveal>

          {/* ── AGREEMENT-FIRST POLICY BANNER (Pure English) ── */}
          <Reveal delay={0.05}>
            <div className="rounded-[28px] sm:rounded-[36px] border-2 border-[#E44C1F]/30 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E44C1F]/10 blur-2xl" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#E44C1F]/15 pb-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                    OUR WORKING POLICY
                  </span>
                  <h2 className="font-agency-headline mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    Agreement First, Then We Build.
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-4 py-1.5 text-xs font-mono font-bold text-white shadow-sm shrink-0">
                  <span>🛡️ 100% Protected & Guaranteed</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-700 leading-relaxed max-w-3xl">
                We value clarity and transparency. <strong className="text-neutral-950 font-bold">We execute a formal mutual service agreement</strong> with locked deliverables and milestones before any coding begins. Payment is strictly structured as <strong className="text-neutral-950 font-bold">25% advance deposit</strong> and <strong className="text-neutral-950 font-bold">75% after handover</strong>.
              </p>

              {/* 5-Step Progress Timeline */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {PROCESS_STEPS.map((s) => (
                  <div
                    key={s.num}
                    className={cn(
                      "relative rounded-2xl p-4 transition-all duration-300",
                      s.highlight
                        ? "border-2 border-[#E44C1F] bg-white shadow-md shadow-[#E44C1F]/10"
                        : "border border-neutral-200/80 bg-white/70"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn("font-mono text-xs font-bold", s.highlight ? "text-[#E44C1F]" : "text-neutral-500")}>
                        STEP {s.num}
                      </span>
                      <span className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold",
                        s.highlight ? "bg-[#E44C1F] text-white" : "bg-neutral-100 text-neutral-600"
                      )}>
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-neutral-950 mt-2">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-neutral-600 leading-relaxed mt-1">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── MAIN INTERACTIVE CONTACT FORM & SIDEBAR ── */}
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                {submitted ? (
                  <div className="rounded-[28px] sm:rounded-[36px] border border-emerald-300 bg-emerald-50/70 p-8 sm:p-12 text-center shadow-sm animate-in fade-in">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-agency-headline mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900">
                      Inquiry Sent to Email!
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-900">{name}</strong>. Your project brief has been sent directly to Syed Abbas Ali's official email (<strong className="text-neutral-900">{site.email}</strong>).
                    </p>
                    <p className="mt-2 text-xs text-neutral-500 max-w-md mx-auto">
                      We will review your requirements and reply to <strong className="text-neutral-800">{email}</strong> within 24 hours with the service agreement outline.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                      }}
                      className="mt-6 inline-flex items-center text-xs font-bold text-[#E44C1F] hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Inquiry →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 rounded-[28px] sm:rounded-[36px] border border-neutral-200 bg-neutral-50/60 p-6 sm:p-10 shadow-sm">
                    {/* Step 1: Project Type */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-bold tracking-wider text-neutral-600 uppercase">
                          1. Select Project Type
                        </label>
                        <span className="text-[11px] font-mono text-[#E44C1F] font-semibold">
                          Step 1 of 3
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedType(type.label)}
                            className={cn(
                              "flex items-center justify-between rounded-2xl px-4 py-3 text-left text-xs font-semibold tracking-wider transition-all cursor-pointer",
                              selectedType === type.label
                                ? "bg-[#E44C1F] text-white shadow-md shadow-[#E44C1F]/25 border border-[#E44C1F]"
                                : "border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-100"
                            )}
                          >
                            <span className="flex items-center gap-2">
                              <span>{type.icon}</span>
                              <span>{type.label}</span>
                            </span>
                            <span className={cn("text-[10px] font-mono", selectedType === type.label ? "text-white/80" : "text-neutral-400")}>
                              {type.turn}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Timeline */}
                    <div>
                      <label className="text-xs font-mono font-bold tracking-wider text-neutral-600 uppercase">
                        2. Target Sprint Timeline
                      </label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {TIMELINES.map((time) => (
                          <button
                            key={time.id}
                            type="button"
                            onClick={() => setSelectedTimeline(time.label)}
                            className={cn(
                              "rounded-full px-4 py-2.5 text-xs font-semibold tracking-wider transition-all cursor-pointer",
                              selectedTimeline === time.label
                                ? "bg-[#E44C1F] text-white shadow-md shadow-[#E44C1F]/25"
                                : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100"
                            )}
                          >
                            {time.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Contact Inputs */}
                    <div className="space-y-4 pt-2">
                      <label className="block text-xs font-mono font-bold tracking-wider text-neutral-600 uppercase">
                        3. Your Contact Details & Brief
                      </label>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase text-neutral-700">
                            Your Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            disabled={isSubmitting}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Syed Abbas Ali"
                            className="mt-1.5 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E44C1F] focus:outline-none focus:ring-1 focus:ring-[#E44C1F] transition-all disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase text-neutral-700">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abby@example.com"
                            className="mt-1.5 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E44C1F] focus:outline-none focus:ring-1 focus:ring-[#E44C1F] transition-all disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-mono font-bold uppercase text-neutral-700">
                          WhatsApp / Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          disabled={isSubmitting}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 70558 59219"
                          className="mt-1.5 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E44C1F] focus:outline-none focus:ring-1 focus:ring-[#E44C1F] transition-all disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[11px] font-mono font-bold uppercase text-neutral-700">
                          Project Brief & Goals
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          disabled={isSubmitting}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about what you want to achieve, reference websites, or special features..."
                          className="mt-1.5 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E44C1F] focus:outline-none focus:ring-1 focus:ring-[#E44C1F] transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E44C1F] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-lg shadow-[#E44C1F]/30 active:scale-98 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending Brief to Email...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Brief & Start with Agreement Lock</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Direct Contact & Transparency Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Founder Access */}
              <Reveal delay={0.15}>
                <div className="rounded-[28px] sm:rounded-[36px] border border-neutral-200 bg-neutral-50/80 p-6 sm:p-8 shadow-sm">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                    DIRECT FOUNDER ACCESS
                  </span>
                  <h3 className="font-agency-headline text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
                    Connect with Syed Abbas Ali
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans">
                    Have an urgent launch or want to discuss terms immediately? Message directly on WhatsApp or call.
                  </p>

                  <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
                    {/* WhatsApp */}
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <span>💬</span>
                        <span>Chat on WhatsApp (Instant)</span>
                      </span>
                      <span>↗</span>
                    </a>

                    {/* Email Copy */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-between rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-xs font-mono text-neutral-800 hover:border-[#E44C1F] transition-all cursor-pointer shadow-xs"
                    >
                      <span>{site.email}</span>
                      <span className="text-[11px] text-neutral-500 font-sans font-bold">Copy 📋</span>
                    </button>

                    {/* Phone */}
                    <a
                      href="tel:+917055859219"
                      className="flex items-center justify-between rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-xs font-mono text-neutral-800 hover:border-[#E44C1F] transition-all shadow-xs"
                    >
                      <span>+91 70558 59219</span>
                      <span className="text-[11px] text-neutral-500 font-sans font-bold">Call 📞</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Guarantees Box */}
              <Reveal delay={0.2}>
                <div className="rounded-[28px] sm:rounded-[36px] border border-neutral-200 bg-neutral-50/80 p-6 sm:p-8 shadow-sm">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                    STUDIO COMMITMENTS
                  </span>
                  <ul className="mt-4 space-y-3">
                    {[
                      { label: "Mutual Agreement First", val: "Written contract executed before any code starts" },
                      { label: "Milestone Payments", val: "25% advance upon agreement, 75% after handover" },
                      { label: "100% Code Ownership", val: "Complete GitHub repository and deployment handover" },
                      { label: "Sub-Second Performance", val: "99+ Mobile Core Web Vitals benchmark guaranteed" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <span className="text-[#E44C1F] font-bold">✓</span>
                        <div>
                          <strong className="text-neutral-900 font-bold">{item.label}: </strong>
                          <span>{item.val}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── FAQ ACCORDION SECTION ── */}
          <Reveal delay={0.25}>
            <div className="rounded-[28px] sm:rounded-[36px] border border-neutral-200 bg-neutral-50/70 p-6 sm:p-10 shadow-sm">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-agency-headline mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Transparent answers to common questions.
                </h2>
              </div>

              <div className="mt-8 space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-neutral-950 hover:text-[#E44C1F] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <span className="text-base text-neutral-400 ml-4">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}

