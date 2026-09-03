import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const triggeredRef = useRef(false);

  const phoneNum = site.phone.replace(/\s+/g, "");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function getMaxDrag() {
    if (!trackRef.current) return 180;
    return Math.max(120, trackRef.current.clientWidth - 56);
  }

  function triggerCall() {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setIsSuccess(true);
    const maxDrag = getMaxDrag();
    setDragX(maxDrag);

    // Native anchor click guarantees dialer modal opens on iOS & Android
    if (linkRef.current) {
      linkRef.current.click();
    } else {
      window.location.href = `tel:${phoneNum}`;
    }

    // Reset slider state after a short pause
    setTimeout(() => {
      triggeredRef.current = false;
      setIsSuccess(false);
      setDragX(0);
    }, 1800);
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    isDraggingRef.current = true;
    triggeredRef.current = false;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current || triggeredRef.current) return;
    currentXRef.current = e.clientX;
    const maxDrag = getMaxDrag();
    const delta = Math.max(0, Math.min(e.clientX - startXRef.current, maxDrag));
    setDragX(delta);

    // Smooth light swipe: trigger at ~35% of track width or >= 60px
    const threshold = Math.min(maxDrag * 0.35, 60);
    if (delta >= threshold) {
      triggerCall();
    }
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    if (triggeredRef.current) return;

    // If tap (< 8px moved) or slid past 30px, trigger call; otherwise reset
    const moved = Math.abs(currentXRef.current - startXRef.current);
    if (moved < 8 || dragX >= 30) {
      triggerCall();
    } else {
      setDragX(0);
    }
  }

  function onPointerCancel() {
    isDraggingRef.current = false;
    if (!triggeredRef.current) {
      setDragX(0);
    }
  }

  if (!visible) return null;

  const maxDrag = getMaxDrag();
  const fillPercent = maxDrag > 0 ? (dragX / maxDrag) * 100 : 0;

  return (
    <aside
      className="fixed bottom-4 inset-x-4 z-[80] md:hidden select-none animate-slide-up"
      aria-label="Slide to call"
    >
      {/* Hidden native anchor for trusted iOS/Android phone dialer dispatch */}
      <a
        ref={linkRef}
        href={`tel:${phoneNum}`}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        Call Abby
      </a>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        style={{ touchAction: "none" }}
        className="relative flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#09090c]/95 p-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        {/* Fill Background */}
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#25D366]/40 transition-all duration-75 pointer-events-none"
          style={{ width: `${fillPercent + 14}%` }}
        />

        {/* Shimmer / Status Text */}
        <div className="pointer-events-none flex items-center gap-2.5 text-xs font-black tracking-[0.22em] uppercase text-white">
          <span className="text-white/90">
            {isSuccess ? "CONNECTING CALL..." : "SLIDE TO CALL"}
          </span>
          {!isSuccess && (
            <span className="animate-arrow-slide text-[#25D366] font-extrabold text-sm" aria-hidden>
              ➔ ➔
            </span>
          )}
        </div>

        {/* Sliding Knob */}
        <div
          className="absolute left-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_0_18px_rgba(37,211,102,0.6)] pointer-events-none"
          style={{
            transform: `translate3d(${dragX}px, 0, 0)`,
            transition: isDraggingRef.current ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          aria-hidden
        >
          <span className="text-xl font-bold">📞</span>
        </div>
      </div>
    </aside>
  );
}
