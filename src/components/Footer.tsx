import { site } from "@/data/site";
import { onHashLinkClick } from "@/lib/scroll";
import { useToast, ToastMessage, copyToClipboard } from "@/components/Toast";

export function Footer() {
  const socials = site.socials.filter((s) => Boolean(s.href));
  const { showToast, toast } = useToast();

  function handleEmailClick(e: React.MouseEvent) {
    e.preventDefault();
    copyToClipboard(site.email, () => {
      showToast(`Email copied: ${site.email}`);
    });
  }

  return (
    <footer className="border-t border-dark/10 bg-dark text-white">
      <ToastMessage message={toast} />
      <div className="page-shell py-16 md:py-20">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Brand & Atelier Overview */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt=""
                className="h-7 w-7 rounded-full"
                width={28}
                height={28}
              />
              <span className="font-display text-base font-extrabold tracking-[0.16em] text-white uppercase">
                {site.brand}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Bespoke Full Stack Web Architecture & High-Performance Digital Products. Engineering modern web solutions with precision, speed, and aesthetic rigor.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs tracking-wider text-white/40 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>HQ: Delhi, India · Global Remote Delivery</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(event) => onHashLinkClick(event, item.href)}
                    className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Capabilities
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>Full Stack Web Applications</li>
              <li>High-Converting UI/UX Systems</li>
              <li>React & Next.js Architecture</li>
              <li>Performance Optimization (99+)</li>
              <li>Custom Node.js & REST APIs</li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-2">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  onClick={handleEmailClick}
                  className="text-white/70 transition-colors duration-300 hover:text-accent cursor-pointer"
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
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {site.hero.year} {site.brand}. All rights reserved.</p>
          <p>Designed & Engineered by {site.name} · Full Stack Web Architect</p>
        </div>
      </div>
    </footer>
  );
}
