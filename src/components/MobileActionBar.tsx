import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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
    setIsDragging(true);
    triggeredRef.current = false;
    startXRef.current = clientX - dragX;
  }

  function handleMove(clientX: number) {
    if (!isDragging || triggeredRef.current) return;
    const maxDrag = getMaxDrag();
    const newX = Math.max(0, Math.min(clientX - startXRef.current, maxDrag));
    setDragX(newX);

    if (newX >= maxDrag * 0.85) {
      triggeredRef.current = true;
      triggerCall();
    }
  }

  function handleEnd() {
    if (!isDragging) return;
    setIsDragging(false);
    const maxDrag = getMaxDrag();
    if (dragX >= maxDrag * 0.75 && !triggeredRef.current) {
      triggerCall();
    } else {
      setDragX(0);
    }
  }

  function triggerCall() {
    setIsDragging(false);
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
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* Fill Background */}
        <div
          className="absolute left-0 top-0 bottom-0 bg-accent/40 transition-all duration-75"
          style={{ width: `${fillPercent + 12}%` }}
        />

        {/* Shimmer Text */}
        <div className="pointer-events-none flex items-center gap-2 text-xs font-black tracking-[0.24em] uppercase text-white">
          <span className="animate-pulse text-white/90">SLIDE TO CALL</span>
          <span className="text-accent font-bold text-sm">»»</span>
        </div>

        {/* Sliding Knob */}
        <div
          className="absolute left-1 flex h-12 w-12 cursor-grab items-center justify-center rounded-full bg-accent text-white shadow-xl active:cursor-grabbing"
          style={{
            transform: `translate3d(${dragX}px, 0, 0)`,
            transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onClick={triggerCall}
        >
          <span className="text-lg animate-bounce">📞</span>
        </div>
      </div>
    </aside>
  );
}
