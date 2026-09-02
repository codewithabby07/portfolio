import { site } from "@/data/site";
import { isFilled } from "@/data/projects";
import { onHashLinkClick } from "@/lib/scroll";

export function Footer() {
  const socials = site.socials.filter((social) => isFilled(social.href));

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
                  onClick={(event) => onHashLinkClick(event, item.href)}
                  className="nav-link text-sm text-dark opacity-80 hover:opacity-100"
                >
                  <span className="nav-text">{item.label}</span>
                  <span className="nav-arrow" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {socials.length ? (
          <div className="md:col-span-3">
            <p className="label-meta text-muted">Social</p>
            <ul className="mt-3 space-y-2">
              {socials.map((social) => (
                <li key={social.label} className="text-sm text-dark">
                  <a
                    href={social.href}
                    className="transition-colors duration-300 hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
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
