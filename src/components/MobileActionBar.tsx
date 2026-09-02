import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show action bar after scrolling past hero (~ 350px)
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-[80] md:hidden p-3 bg-dark/95 border-t border-white/10 backdrop-blur-lg shadow-2xl transition-all duration-300 animate-slide-up"
      aria-label="Quick contact bar"
    >
      <div className="flex items-center gap-2">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-xs font-extrabold text-black uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <span className="text-sm">💬</span>
          <span>WhatsApp Chat</span>
        </a>

        <a
          href={`tel:${site.phone.replace(/\s+/g, "")}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-xs font-extrabold text-white uppercase tracking-wider backdrop-blur-md active:scale-95 transition-transform"
        >
          <span className="text-sm">📞</span>
          <span>Call Now</span>
        </a>
      </div>
    </aside>
  );
}
