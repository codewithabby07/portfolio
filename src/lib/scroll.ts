import type { MouseEvent } from "react";

export function scrollToHash(hash: string, reduce = false) {
  const id = hash.replace("#", "");
  if (!id || id === "home") {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 80) + 28;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduce ? "auto" : "smooth",
  });
}

export function onHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  reduce = false,
) {
  if (!href || typeof href !== "string" || !href.startsWith("#")) return;
  event.preventDefault();
  scrollToHash(href, reduce);
  history.pushState(null, "", href);
}
