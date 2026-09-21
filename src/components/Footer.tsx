import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { useToast, ToastMessage, copyToClipboard } from "@/components/Toast";

export function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/codewithabby07" },
    { label: "WhatsApp", href: "https://wa.me/917055859219" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abby-undefined-436951433/" },
    { label: "Instagram", href: "https://www.instagram.com/codewithabby07/" },
    { label: "X", href: "https://x.com/codewithabby07" },
  ];
  const { showToast, toast } = useToast();

  function handleEmailClick(e: React.MouseEvent) {
    e.preventDefault();
    copyToClipboard(site.email, () => {
      showToast(`Email copied: ${site.email}`);
    });
  }

  function onHashLinkClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (!href.startsWith("#")) return;
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <ToastMessage message={toast} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="CodeWithAbby Logo"
                className="h-7 w-7 rounded-full"
              />
              <span className="font-display text-sm font-bold tracking-[0.14em] uppercase text-white">
                {site.brand}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Full Stack Developer building websites and web apps for founders, startups, and businesses. Delhi, India.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs tracking-wider text-white/40 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E44C1F]" />
              <span>Delhi, India · Remote</span>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => onHashLinkClick(e, item.href.replace("/", ""))}
                      className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Capabilities
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>Full Stack Web Applications</li>
              <li>High-Converting UI/UX Systems</li>
              <li>React &amp; Next.js Architecture</li>
              <li>Performance Optimization</li>
              <li>Custom Node.js &amp; REST APIs</li>
            </ul>
          </div>

          {/* Column 4: Connect & Socials (2 cols) */}
          <div className="lg:col-span-2">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  onClick={handleEmailClick}
                  className="text-white/70 transition-colors duration-300 hover:text-[#E44C1F] cursor-pointer"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors duration-300 hover:text-emerald-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social icon row (3 top, 2 bottom) */}
            <div className="mt-6 flex items-center gap-3 flex-wrap max-w-[170px]">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white hover:scale-110 active:scale-95"
                >
                  {social.label === "GitHub" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  )}
                  {social.label === "LinkedIn" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.label === "Instagram" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  )}
                  {social.label === "X" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.label === "WhatsApp" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row pb-12 sm:pb-0">
          <p>© {site.hero.year} {site.brand}. All rights reserved.</p>
          <p>Built by {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
