import { useState, useEffect } from "react";

export function useToast() {
  const [toast, setToast] = useState<string | null>(null);

  function showToast(message: string) {
    setToast(message);
  }

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  return { showToast, toast };
}

export function ToastMessage({
  message,
  icon = "📋",
}: {
  message: string | null;
  icon?: string;
}) {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[120] flex items-center gap-2.5 rounded-lg bg-dark px-5 py-3.5 text-sm font-bold text-white shadow-2xl border border-white/20 animate-fade-in backdrop-blur-md"
    >
      <span className="text-emerald-400 font-extrabold text-base" aria-hidden>{icon}</span>
      <span>{message}</span>
    </div>
  );
}

export function copyToClipboard(text: string, callback?: () => void) {
  navigator.clipboard.writeText(text).then(() => {
    if (callback) callback();
  });
}
