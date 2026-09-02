import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Reveal, SectionLabel } from "@/components/ui";

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

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const disabled = status === "loading" || status === "success";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.company) {
      setStatus("success");
      return;
    }
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
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
            Tell Abby about the website, product, or experience you want to
            build. The form is ready on the frontend — email delivery can be
            connected without changing this layout.
          </p>
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
                  {status === "loading"
                    ? "Sending"
                    : status === "success"
                      ? "Received"
                      : "Send message"}
                </button>

                <p
                  className={cn(
                    "mt-4 min-h-6 text-sm",
                    status === "success" && "text-dark",
                    status === "error" && "text-danger",
                    status === "idle" && "text-muted",
                  )}
                  role="status"
                  aria-live="polite"
                >
                  {status === "success"
                    ? site.contact.success
                    : status === "error"
                      ? (Object.values(errors)[0] ?? site.contact.error)
                      : "Frontend only for now — no email is sent yet."}
                </p>
              </form>
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
