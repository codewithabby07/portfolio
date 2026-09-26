import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Reveal, SectionLabel } from "@/components/ui";
import { useToast, ToastMessage } from "@/components/Toast";

type Status = "idle" | "loading" | "success" | "error";

const SERVICES = [
  { id: "custom-website", label: "Custom Website", icon: "🌐" },
  { id: "nextjs-app", label: "Next.js Web App", icon: "⚡" },
  { id: "ecommerce", label: "E-Commerce Store", icon: "🛒" },
  { id: "speed-seo", label: "Speed & SEO Audit", icon: "🚀" },
  { id: "architecture", label: "Architecture / UI", icon: "📐" },
];

const TIMELINES = [
  { id: "sprint", label: "⚡ 6–7 Days Sprint", badge: "Fastest" },
  { id: "standard", label: "📅 2–3 Weeks", badge: "Standard" },
  { id: "flexible", label: "⏳ Flexible", badge: "Planning" },
];

type Fields = {
  service: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const initial: Fields = {
  service: "Custom Website",
  timeline: "⚡ 6–7 Days Sprint",
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (values.message.trim().length < 5) {
    errors.message = "Please write a brief note about what you want to build.";
  }
  return errors;
}

const FORMSPREE_ID = "xqpkbabk";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [lastSubmitted, setLastSubmitted] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const { showToast, toast } = useToast();

  const disabled = status === "loading";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.company) {
      setStatus("success");
      setLastSubmitted(values);
      showToast("Project brief received! I'll reply within 24 hours.");
      return;
    }
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service: values.service,
          timeline: values.timeline,
          name: values.name,
          email: values.email,
          phone: values.phone || "Not provided",
          message: values.message,
        }),
      });

      if (res.ok) {
        setLastSubmitted(values);
        setStatus("success");
        setValues(initial);
        setErrors({});
        showToast("Project brief sent! I'll reply within 24 hours.");
      } else {
        setStatus("error");
        showToast("Could not send. Please message directly on WhatsApp.");
      }
    } catch {
      setStatus("error");
      showToast("Network error. Please try again or WhatsApp directly.");
    }
  }

  const waBriefUrl = `https://wa.me/917055859219?text=${encodeURIComponent(
    `Hi Abby, I just submitted a project brief on your portfolio:\n\n• Service: ${lastSubmitted.service}\n• Timeline: ${lastSubmitted.timeline}\n• Name: ${lastSubmitted.name || "Client"}\n\nLet's connect and discuss!`
  )}`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <ToastMessage message={toast} icon="✓" />
      <img
        src={site.contact.background}
        alt="CodeWithAbby Studio contact section background texture"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={900}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark/70 backdrop-blur-[2px]" />
      <p
        className="display pointer-events-none absolute top-[18%] right-[-4%] hidden text-[18vw] whitespace-nowrap text-white/5 select-none lg:block"
        aria-hidden
      >
        LET'S TALK
      </p>

      <div className="page-shell relative grid items-start gap-12 lg:grid-cols-12">
        {/* Left Column: Direct Info */}
        <Reveal className="text-white lg:col-span-5 lg:sticky lg:top-28">
          <SectionLabel light>{site.contact.label}</SectionLabel>
          <h2 id="contact-heading" className="display mt-4 text-5xl md:text-7xl">
            {site.contact.title.toUpperCase()}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            Tell me about what you're building. Select your scope below for an instant discussion, or reach out directly on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 max-w-md">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 p-4 text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-500/25 hover:scale-[1.02]"
            >
              <span className="text-2xl" aria-hidden>💬</span>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-emerald-400 uppercase">
                  Direct WhatsApp (Instant Reply)
                </span>
                <span className="text-base font-extrabold text-white">
                  +91 7055859219
                </span>
              </div>
            </a>

            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="group inline-flex items-center gap-3.5 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:scale-[1.02]"
            >
              <span className="text-2xl" aria-hidden>📞</span>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                  Direct Phone
                </span>
                <span className="text-base font-extrabold text-white">
                  {site.phone}
                </span>
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md max-w-md">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
              ⚡ 6–7 Day Delivery Guarantee
            </p>
            <p className="text-xs text-white/65 leading-relaxed">
              No endless agency loops. Direct founder-to-developer collaboration with daily milestone updates.
            </p>
          </div>
        </Reveal>

        {/* Right Column: Interactive Scope Form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="overflow-hidden rounded-2xl bg-surface border border-border shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8 bg-dark/[0.02]">
              <div>
                <p className="font-display text-sm font-extrabold tracking-[0.16em] text-dark uppercase">
                  PROJECT SCOPE &amp; INQUIRY
                </p>
                <p className="text-[11px] text-muted">
                  Configure your project scope in 30 seconds
                </p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" aria-hidden />
            </div>

            <div className="p-6 md:p-8">
              {status === "success" ? (
                <div className="py-8 text-center animate-fade-in" role="alert" aria-live="polite">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30 shadow-inner">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-dark uppercase tracking-tight">
                    Project Brief Received!
                  </h3>
                  <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-dark">{lastSubmitted.name || "friend"}</strong>! Your brief for a <strong className="text-dark">{lastSubmitted.service}</strong> has been logged. I'll review and reply within 24 hours.
                  </p>

                  {/* Instant WhatsApp bridge */}
                  <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center max-w-md mx-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Want an instant reply on WhatsApp?
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Send your pre-filled brief directly to my phone:
                    </p>
                    <a
                      href={waBriefUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-xs font-extrabold text-black uppercase tracking-wider shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                      <span className="text-base" aria-hidden>💬</span>
                      <span>Send Brief via WhatsApp</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setValues(initial);
                      }}
                      className="text-xs font-bold text-accent hover:underline uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      ← Submit another project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  {/* Honey pot */}
                  <div className="sr-only" aria-hidden="true">
                    <label>
                      Company
                      <input
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.company}
                        onChange={(e) => setValues((c) => ({ ...c, company: e.target.value }))}
                      />
                    </label>
                  </div>

                  {/* 1. Project Type Selector */}
                  <div>
                    <label className="mb-2.5 block text-xs font-bold tracking-wider text-dark uppercase">
                      1. What are you looking to build? <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {SERVICES.map((s) => {
                        const selected = values.service === s.label;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setValues((c) => ({ ...c, service: s.label }))}
                            className={cn(
                              "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-xs font-semibold transition-all duration-200 cursor-pointer",
                              selected
                                ? "border-accent bg-accent/10 text-accent shadow-xs"
                                : "border-border bg-background text-dark/80 hover:border-dark/30 hover:bg-dark/[0.02]"
                            )}
                          >
                            <span aria-hidden>{s.icon}</span>
                            <span className="truncate">{s.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Timeline Selector */}
                  <div>
                    <label className="mb-2.5 block text-xs font-bold tracking-wider text-dark uppercase">
                      2. Preferred Timeline
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {TIMELINES.map((t) => {
                        const selected = values.timeline === t.label;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setValues((c) => ({ ...c, timeline: t.label }))}
                            className={cn(
                              "flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-xs font-semibold transition-all duration-200 cursor-pointer",
                              selected
                                ? "border-accent bg-accent/10 text-accent shadow-xs"
                                : "border-border bg-background text-dark/80 hover:border-dark/30 hover:bg-dark/[0.02]"
                            )}
                          >
                            <span>{t.label}</span>
                            <span className="text-[10px] text-muted opacity-80 uppercase">{t.badge}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Contact Inputs */}
                  <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-border">
                    <Field
                      id="name"
                      label="Your Name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={values.name}
                      error={errors.name}
                      disabled={disabled}
                      autoComplete="name"
                      onChange={(value) => setValues((c) => ({ ...c, name: value }))}
                    />
                    <Field
                      id="email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={values.email}
                      error={errors.email}
                      disabled={disabled}
                      autoComplete="email"
                      onChange={(value) => setValues((c) => ({ ...c, email: value }))}
                    />
                  </div>

                  <Field
                    id="phone"
                    label="WhatsApp / Phone (Optional for quick chat)"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={values.phone}
                    disabled={disabled}
                    autoComplete="tel"
                    onChange={(value) => setValues((c) => ({ ...c, phone: value }))}
                  />

                  <Field
                    id="message"
                    label="Project Details & Requirements"
                    required
                    textarea
                    placeholder="Briefly describe your business, existing site (if any), and key features you need..."
                    value={values.message}
                    error={errors.message}
                    disabled={disabled}
                    onChange={(value) => setValues((c) => ({ ...c, message: value }))}
                  />

                  {status === "error" && !Object.keys(errors).length ? (
                    <div className="rounded-md border border-danger/30 bg-danger/10 p-3 text-xs text-danger">
                      Could not send message. Please message directly on{" "}
                      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                        WhatsApp
                      </a>
                      .
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={disabled}
                    aria-busy={status === "loading"}
                    className={cn(
                      "group/cta mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark px-6 py-4 text-xs font-extrabold tracking-[0.18em] text-white uppercase transition-all duration-300 shadow-md",
                      "hover:bg-accent hover:shadow-lg hover:scale-[1.01]",
                      "active:scale-[0.99]",
                      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-dark disabled:active:scale-100",
                      status === "loading" && "cursor-wait"
                    )}
                  >
                    <span>{status === "loading" ? "Sending Brief..." : "Submit Project Brief →"}</span>
                  </button>

                  <p className="text-center text-xs text-muted">
                    🔒 Direct inquiry with Abby · Replies within 24 hours · Zero spam
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  disabled,
  required,
  textarea,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled: boolean;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  const classes = cn(
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-dark outline-none transition-colors duration-200",
    "placeholder:text-muted/60",
    "hover:border-dark/40",
    "focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    disabled && "cursor-not-allowed opacity-60",
    error ? "border-danger" : "border-border"
  );

  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold tracking-wide text-dark">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={3}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(classes, "resize-y")}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={classes}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
