import { site } from "@/data/site";
import { isFilled } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-display text-sm font-extrabold tracking-[0.16em] uppercase">
            {site.brand}
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted">{site.footerNote}</p>
        </div>

        <nav className="md:col-span-4" aria-label="Footer">
          <ul className="space-y-2">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm tracking-[0.14em] text-dark uppercase transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">Social</p>
          <ul className="mt-3 space-y-2">
            {site.socials.map((social) => (
              <li key={social.label} className="text-sm text-dark">
                {isFilled(social.href) ? (
                  <a
                    href={social.href}
                    className="hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span className="text-muted">
                    {social.label} <span className="text-[11px] tracking-widest">[PLACEHOLDER]</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page-shell flex flex-col gap-2 border-t border-border py-6 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {site.hero.year} {site.brand}
        </p>
        <p>{site.name}</p>
      </div>
    </footer>
  );
}
