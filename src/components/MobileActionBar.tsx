import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const [dragX, setDragX] = useState(0);
  // Use a ref for isDragging so handleMove reads the value synchronously
  // (React state updates are async — reading isDragging state in handleMove
  //  would always see the stale false value from before handleStart fired)
  const isDraggingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const triggeredRef = useRef(false);

  const phoneNum = site.phone.replace(/\s+/g, "");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function getMaxDrag() {
    if (!trackRef.current) return 200;
    return trackRef.current.clientWidth - 56;
  }

  function handleStart(clientX: number) {
    isDraggingRef.current = true;
    triggeredRef.current = false;
    startXRef.current = clientX - dragX;
  }

  function handleMove(clientX: number) {
    if (!isDraggingRef.current || triggeredRef.current) return;
    const maxDrag = getMaxDrag();
    const newX = Math.max(0, Math.min(clientX - startXRef.current, maxDrag));
    setDragX(newX);

    if (newX >= maxDrag * 0.85) {
      triggeredRef.current = true;
      triggerCall();
    }
  }

  function handleEnd() {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const maxDrag = getMaxDrag();
    if (dragX >= maxDrag * 0.75 && !triggeredRef.current) {
      triggerCall();
    } else if (!triggeredRef.current) {
      setDragX(0);
    }
  }

  function triggerCall() {
    isDraggingRef.current = false;
    setDragX(0);
    window.location.href = `tel:${phoneNum}`;
  }

  if (!visible) return null;

  const maxDrag = getMaxDrag();
  const fillPercent = maxDrag > 0 ? (dragX / maxDrag) * 100 : 0;

  return (
    <aside
      className="fixed bottom-4 inset-x-4 z-[80] md:hidden select-none animate-slide-up"
      aria-label="Slide to call"
    >
      <div
        ref={trackRef}
        className="relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#09090c]/95 p-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => {
          e.preventDefault();
          handleMove(e.touches[0].clientX);
        }}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* Fill Background */}
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#25D366]/40 transition-all duration-75"
          style={{ width: `${fillPercent + 12}%` }}
        />

        {/* Label & Animated Arrows */}
        <div className="pointer-events-none flex items-center gap-2.5 text-xs font-black tracking-[0.24em] uppercase text-white">
          <span className="text-white/90">SLIDE TO CALL</span>
          <span className="animate-arrow-slide text-[#25D366] font-extrabold text-sm" aria-hidden>
            ➔ ➔
          </span>
        </div>

        {/* Sliding Knob */}
        <div
          className="absolute left-1 flex h-12 w-12 cursor-grab items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.5)] active:cursor-grabbing"
          style={{
            transform: `translate3d(${dragX}px, 0, 0)`,
            transition: isDraggingRef.current ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          aria-hidden
        >
          <span className="text-xl font-bold">📞</span>
        </div>
      </div>
    </aside>
  );
}
