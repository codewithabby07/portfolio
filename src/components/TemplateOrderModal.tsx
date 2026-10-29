import { useState } from "react";
import { type WebsiteTemplate } from "@/data/templates";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { X, CheckCircle2, MessageCircle, AlertCircle, UploadCloud, Sparkles } from "lucide-react";

type TemplateOrderModalProps = {
  template: WebsiteTemplate | null;
  isOpen: boolean;
  onClose: () => void;
};

export function TemplateOrderModal({
  template,
  isOpen,
  onClose,
}: TemplateOrderModalProps) {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [photoChange, setPhotoChange] = useState<"no" | "yes">("no");
  const [selectedPhotoName, setSelectedPhotoName] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState("");
  const [errors, setErrors] = useState<{ senderName?: string; receiverName?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !template) return null;

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPhotoName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { senderName?: string; receiverName?: string } = {};

    if (!senderName.trim()) {
      newErrors.senderName = "Please enter your name (Sender)";
    }
    if (!receiverName.trim()) {
      newErrors.receiverName = "Please enter their name (Receiver)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the WhatsApp message
    const photoPreferenceText =
      photoChange === "yes"
        ? `Yes (I have a photo${selectedPhotoName ? `: "${selectedPhotoName}"` : ""}, will share in chat)`
        : "No (Use template default cute illustrations)";

    const messageLines = [
      `👋 Hi Abby! I want to order and customize a website template:`,
      ``,
      `📌 *Template:* ${template.name}`,
      `💰 *Price:* ${template.currency}${template.price}`,
      `👤 *Sender Name:* ${senderName.trim()}`,
      `❤️ *Receiver Name:* ${receiverName.trim()}`,
      `📸 *Photo Change:* ${photoPreferenceText}`,
      customMessage.trim() ? `📝 *Custom Message:* "${customMessage.trim()}"` : `📝 *Custom Message:* (Default romantic apology text)`,
      ``,
      `Please personalize this template for me and share the UPI payment details! 🚀`,
    ];

    const encodedText = encodeURIComponent(messageLines.join("\n"));
    // Using existing configured business WhatsApp from site.ts (917055859219)
    const whatsappUrl = `https://wa.me/917055859219?text=${encodedText}`;

    setIsSubmitted(true);

    // Open WhatsApp in a new tab/app
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 p-6 sm:p-8 text-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#E44C1F]/20 blur-3xl"
          aria-hidden
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-neutral-400 hover:bg-white/20 hover:text-white transition-all"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E44C1F]">
              <Sparkles className="h-4 w-4" />
              <span>Customize & Order • {template.currency}{template.price} Only</span>
            </div>

            <h3 id="order-modal-title" className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {template.name}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-neutral-400">
              Fill in your details below. We'll prefill your WhatsApp message directly to Abby to personalize your link within minutes!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sender Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Name (Sender) <span className="text-[#E44C1F]">*</span>
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => {
                      setSenderName(e.target.value);
                      if (errors.senderName) setErrors((prev) => ({ ...prev, senderName: undefined }));
                    }}
                    placeholder="e.g. Rahul / Abby"
                    className={cn(
                      "w-full rounded-xl border bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#E44C1F] focus:bg-white/[0.08]",
                      errors.senderName ? "border-red-500/80 bg-red-500/[0.05]" : "border-white/10"
                    )}
                  />
                  {errors.senderName && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.senderName}</span>
                    </p>
                  )}
                </div>

                {/* Receiver Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Their Name (Receiver) <span className="text-[#E44C1F]">*</span>
                  </label>
                  <input
                    type="text"
                    value={receiverName}
                    onChange={(e) => {
                      setReceiverName(e.target.value);
                      if (errors.receiverName) setErrors((prev) => ({ ...prev, receiverName: undefined }));
                    }}
                    placeholder="e.g. Kiara / Sneha"
                    className={cn(
                      "w-full rounded-xl border bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#E44C1F] focus:bg-white/[0.08]",
                      errors.receiverName ? "border-red-500/80 bg-red-500/[0.05]" : "border-white/10"
                    )}
                  />
                  {errors.receiverName && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.receiverName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Photo Change Preference */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="block text-xs font-medium text-neutral-200 mb-2">
                  Do you want to include custom personal photos?
                </span>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="radio"
                      name="photoChange"
                      value="no"
                      checked={photoChange === "no"}
                      onChange={() => setPhotoChange("no")}
                      className="accent-[#E44C1F]"
                    />
                    <span>No (Keep cute animated graphics)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="radio"
                      name="photoChange"
                      value="yes"
                      checked={photoChange === "yes"}
                      onChange={() => setPhotoChange("yes")}
                      className="accent-[#E44C1F]"
                    />
                    <span className="text-[#E44C1F] font-semibold">Yes, add our photo</span>
                  </label>
                </div>

                {photoChange === "yes" && (
                  <div className="mt-3 pt-3 border-t border-white/10 animate-fadeIn">
                    <label className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-3 text-xs text-neutral-300 cursor-pointer hover:bg-white/[0.06] hover:border-[#E44C1F]/60 transition-all">
                      <UploadCloud className="h-4 w-4 text-[#E44C1F]" />
                      <span>
                        {selectedPhotoName ? `Selected: ${selectedPhotoName}` : "Choose photo file (optional)"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoSelect}
                        className="hidden"
                      />
                    </label>
                    <p className="mt-1.5 text-[11px] text-neutral-400">
                      💡 Tip: You can also attach photos directly in the WhatsApp chat when it opens.
                    </p>
                  </div>
                )}
              </div>

              {/* Custom Personal Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Custom Personal Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g. I am really sorry for getting angry yesterday. You mean the world to me..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#E44C1F] focus:bg-white/[0.08]"
                />
              </div>

              {/* Summary and Price Notice */}
              <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 border border-white/5">
                <div>
                  <span className="text-xs text-neutral-400 block">Total Template Price</span>
                  <span className="text-lg font-bold text-white">
                    {template.currency}{template.price}
                    <span className="ml-2 text-xs text-neutral-500 line-through">
                      {template.currency}{template.originalPrice}
                    </span>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                  Save 80%
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 rounded-full bg-[#E44C1F] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Send Order via WhatsApp • {template.currency}{template.price}</span>
              </button>

              <p className="text-center text-[11px] text-neutral-400 leading-relaxed">
                WhatsApp will open with your prefilled details. Press <strong>Send</strong> in chat. Payment is completed securely via UPI after Abby confirms your customization.
              </p>
            </form>
          </div>
        ) : (
          /* Post-Submit Confirmation View */
          <div className="py-6 text-center space-y-4 animate-fadeIn">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              WhatsApp Opened!
            </h3>

            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              We've prefilled your order for <strong>{template.name}</strong> for {receiverName}. Please press <span className="text-[#E44C1F] font-semibold">"Send"</span> in WhatsApp to deliver your brief to Abby.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-xs text-neutral-400 space-y-1.5 max-w-sm mx-auto">
              <p>• <strong>Sender:</strong> {senderName}</p>
              <p>• <strong>Receiver:</strong> {receiverName}</p>
              <p>• <strong>Price:</strong> {template.currency}{template.price}</p>
              <p className="text-emerald-400 pt-1">
                ℹ️ Note: No payment was collected automatically. Abby will share the UPI QR code directly on WhatsApp.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  const encodedText = encodeURIComponent(
                    `Hi Abby! Resending my template order for ${template.name}: ${senderName} to ${receiverName} (₹${template.price}).`
                  );
                  window.open(`https://wa.me/917055859219?text=${encodedText}`, "_blank");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-all"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>Re-open WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center rounded-full bg-[#E44C1F] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#ff5d2e] transition-all"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
