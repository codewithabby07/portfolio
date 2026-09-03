import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Reveal, SectionLabel } from "@/components/ui";
import { useToast, ToastMessage } from "@/components/Toast";

type Status = "idle" | "loading" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const initial: Fields = { name: "", email: "", message: "", company: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (values.message.trim().length < 10) {
    errors.message =
      "Please write a short project note (at least 10 characters).";
  }
  return errors;
}

// ─── Formspree form ID ────────────────────────────────────────────────────────
// 1. Go to https://formspree.io  →  New form  →  link to codewithabby07@gmail.com
// 2. Copy the form ID (e.g. "xpwzabcd") and paste it below.
const FORMSPREE_ID = "xqpkbabk";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const { showToast, toast } = useToast();

  const disabled = status === "loading";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.company) {
      setStatus("success");
      showToast("Message sent successfully! I'll reply within 24 hours.");
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
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setValues(initial);
        setErrors({});
        showToast("Message sent successfully! I'll reply within 24 hours.");
      } else {
        setStatus("error");
        showToast("Could not send. Please message on WhatsApp instead.");
      }
    } catch {
      setStatus("error");
      showToast("Network error. Please try again or WhatsApp directly.");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <ToastMessage message={toast} icon="✓" />
      <img
        src={site.contact.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={900}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark/55" />
      <p
        className="display pointer-events-none absolute top-[18%] right-[-4%] hidden text-[18vw] whitespace-nowrap text-white/10 select-none lg:block"
        aria-hidden
      >
        LET'S TALK
      </p>

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="text-white lg:col-span-6">
          <SectionLabel light>{site.contact.label}</SectionLabel>
          <h2 id="contact-heading" className="display mt-4 text-6xl md:text-8xl">
            {site.contact.title.toUpperCase()}
          </h2>
          <p className="mt-6 max-w-md text-white/75">
            Have a project in mind? Tell me what you're looking to build. I'll get back to you within 24 hours — or reach out directly below.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 max-w-md">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 rounded-lg border border-emerald-500/40 bg-emerald-500/15 p-4 text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-500/25"
            >
              <span className="text-2xl" aria-hidden>💬</span>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-emerald-400 uppercase">
                  WhatsApp
                </span>
                <span className="text-base font-extrabold text-white">
                  +91 7055859219
                </span>
              </div>
            </a>

            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-3.5 rounded-lg border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15"
            >
              <span className="text-2xl" aria-hidden>📞</span>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                  Phone
                </span>
                <span className="text-base font-extrabold text-white">
                  {site.phone}
                </span>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div className="overflow-hidden bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8">
              <p className="font-display text-sm font-extrabold tracking-[0.16em] text-dark uppercase">
                {site.brand}
              </p>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
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
                    Message Delivered!
                  </h3>
                  <p className="mt-2 text-sm text-muted max-w-sm mx-auto leading-relaxed">
                    Thank you! Your message has been sent directly to Abby. I'll get back to you within 24 hours.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border flex flex-col items-center gap-3">
                    <p className="text-xs text-muted">
                      Need a quicker response?
                    </p>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-xs font-extrabold text-black uppercase tracking-wider transition-transform duration-200 hover:scale-105"
                    >
                      <span>💬</span>
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setValues(initial);
                      }}
                      className="mt-2 text-xs font-bold text-accent hover:underline uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      ← Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 border-b border-border pb-5">
                    <p className="text-2xl font-semibold tracking-tight text-dark">
                      {site.contact.kicker}
                    </p>
                  </div>

                  <form onSubmit={onSubmit} noValidate>
                    <div className="sr-only" aria-hidden="true">
                      <label>
                        Company
                        <input
                          name="company"
                          tabIndex={-1}
                          autoComplete="off"
                          value={values.company}
                          onChange={(event) =>
                            setValues((current) => ({
                              ...current,
                              company: event.target.value,
                            }))
                          }
                        />
                      </label>
                    </div>

                    <Field
                      id="name"
                      label="Full name"
                      required
                      value={values.name}
                      error={errors.name}
                      disabled={disabled}
                      autoComplete="name"
                      onChange={(value) =>
                        setValues((current) => ({ ...current, name: value }))
                      }
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      required
                      value={values.email}
                      error={errors.email}
                      disabled={disabled}
                      autoComplete="email"
                      onChange={(value) =>
                        setValues((current) => ({ ...current, email: value }))
                      }
                    />
                    <Field
                      id="message"
                      label="Project / message"
                      required
                      textarea
                      value={values.message}
                      error={errors.message}
                      disabled={disabled}
                      onChange={(value) =>
                        setValues((current) => ({ ...current, message: value }))
                      }
                    />

                    {status === "error" && !Object.keys(errors).length ? (
                      <div className="mb-4 rounded-md border border-danger/30 bg-danger/10 p-3 text-xs text-danger">
                        Could not send your message. Please try again or reach out on{" "}
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
                        "group/cta mt-2 inline-flex w-full items-center justify-center gap-2 bg-dark px-6 py-4 text-[12px] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300",
                        "hover:bg-accent",
                        "active:scale-[0.98]",
                        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-dark disabled:active:scale-100",
                        status === "loading" && "cursor-wait",
                      )}
                    >
                      {status === "loading" ? "Sending..." : "Send message"}
                    </button>

                    <p
                      className="mt-4 min-h-6 text-sm text-muted"
                      role="status"
                      aria-live="polite"
                    >
                      I'll reply to your message within 24 hours.
                    </p>
                  </form>
                </>
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
  type?: string;
  autoComplete?: string;
}) {
  const classes = cn(
    "w-full border bg-background px-4 py-3 text-sm text-dark outline-none transition-colors duration-200",
    "placeholder:text-muted/70",
    "hover:border-dark/40",
    "focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    disabled && "cursor-not-allowed opacity-60",
    error ? "border-danger" : "border-border",
  );

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-2 block text-[12px] font-medium tracking-wide text-dark"
      >
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
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
