import { useState, useEffect } from "react";
import { type WebsiteTemplate, type TemplateEditableField } from "@/data/templates";
import { cn } from "@/lib/cn";
import {
  X,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  UploadCloud,
  Sparkles,
  ShoppingBag,
  Star,
  Sliders,
  Check
} from "lucide-react";

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
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [photoChange, setPhotoChange] = useState<"no" | "yes">("no");
  const [selectedPhotoName, setSelectedPhotoName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize or reset formData when template opens
  useEffect(() => {
    if (template) {
      const initialData: Record<string, string> = {}; template.editableFields.forEach((field) => { initialData[field.key] = field.defaultValue || ""; }); setFormData(initialData);
      setErrors({});
      setPhotoChange("no");
      setSelectedPhotoName(null);
      setIsSubmitted(false);
    }
  }, [template, isOpen]);

  if (!isOpen || !template) return null;

  const handleFieldChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPhotoName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate all required editable fields
    template.editableFields.forEach((field) => {
      if (field.required && !formData[field.key]?.trim()) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the WhatsApp message with all editable customizations clearly listed
    const photoPreferenceText =
      photoChange === "yes"
        ? `Yes (I have photo(s)${selectedPhotoName ? `: "${selectedPhotoName}"` : ""}, will attach in this chat)`
        : "No (Use template default cute illustrations / animations)";

    const messageLines = [
      `👋 Hi Abby! I want to order and customize this website template:`,
      ``,
      `📌 *Template:* ${template.name}`,
      `💰 *Price:* ${template.currency}${template.price} (Special Offer)`,
      `🏷️ *Category:* ${template.category}`,
      ``,
      `✏️ *--- CUSTOMIZATION DETAILS ---*`,
    ];

    template.editableFields.forEach((field) => {
      const val = formData[field.key]?.trim();
      messageLines.push(`• *${field.label}:* ${val ? `"${val}"` : "(Keep template default)"}`);
    });

    messageLines.push(`• *Personal Photos Included:* ${photoPreferenceText}`);
    messageLines.push(``);
    messageLines.push(`Please personalize this website for me and share the UPI QR code! 🚀`);

    const encodedText = encodeURIComponent(messageLines.join("\n"));
    // Using business WhatsApp from site.ts (917055859219)
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        className="relative w-full max-w-xl my-6 overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 p-5 sm:p-7 text-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#E44C1F]/20 blur-3xl"
          aria-hidden
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-neutral-400 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header info with sales count & rating */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E44C1F]">
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Customize & Order • {template.currency}{template.price} Only</span>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-mono">
                <ShoppingBag className="h-3 w-3" />
                <span>{template.ordersCount.toLocaleString()}+ Bought</span>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="inline-flex items-center gap-1 text-amber-400">
                <Star className="h-3 w-3 fill-amber-400" />
                <span>{template.rating} ({template.reviewsCount})</span>
              </span>
            </div>

            <h3 id="order-modal-title" className="font-display mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {template.name}
            </h3>

            <p className="mt-1 text-xs text-neutral-400">
              Customize everything below. Every field marked with <span className="text-[#E44C1F] font-bold">*</span> is editable and will be custom-built into your private website link!
            </p>

            {/* Editable Fields Section Callout */}
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2 text-xs text-neutral-300">
              <Sliders className="h-4 w-4 text-[#EE95BB] shrink-0" />
              <span>
                <strong className="text-white">All Editable Elements:</strong> Names, letters, dates, questions & custom stats can be customized here.
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
              {/* Dynamic Editable Fields List */}
              <div className="space-y-3">
                {template.editableFields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-neutral-200 mb-1">
                      {field.label} {field.required && <span className="text-[#E44C1F]">*</span>}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        rows={3}
                        value={formData[field.key] || ""}
                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.04] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#E44C1F] focus:bg-white/[0.08]",
                          errors[field.key] ? "border-red-500/80 bg-red-500/[0.05]" : "border-white/10"
                        )}
                      />
                    ) : (
                      <input
                        type="text"
                        value={formData[field.key] || ""}
                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.04] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#E44C1F] focus:bg-white/[0.08]",
                          errors[field.key] ? "border-red-500/80 bg-red-500/[0.05]" : "border-white/10"
                        )}
                      />
                    )}

                    {errors[field.key] && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors[field.key]}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Photo Change Preference */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5">
                <span className="block text-xs font-medium text-neutral-200 mb-1.5">
                  Do you want to include custom personal photos?
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="radio"
                      name="photoChange"
                      value="no"
                      checked={photoChange === "no"}
                      onChange={() => setPhotoChange("no")}
                      className="accent-[#E44C1F]"
                    />
                    <span>No (Use cute animated illustrations)</span>
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
                    <span className="text-[#E44C1F] font-semibold">Yes, add our photos</span>
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
                      💡 Tip: You can also attach pictures directly in the WhatsApp chat when it opens.
                    </p>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-2.5 border border-white/5">
                <div>
                  <span className="text-xs text-neutral-400 block">Total Price with Customization</span>
                  <span className="text-lg font-bold text-white">
                    {template.currency}{template.price}
                    <span className="ml-2 text-xs text-neutral-500 line-through">
                      {template.currency}{template.originalPrice}
                    </span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 block">
                    Save 80% • Instant UPI
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-0.5 block">
                    {template.ordersCount.toLocaleString()}+ happy customers
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#E44C1F] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp • {template.currency}{template.price}</span>
              </button>

              <p className="text-center text-[11px] text-neutral-400 leading-relaxed pb-1">
                WhatsApp will open with all your entered details prefilled. Send message in chat to confirm!
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4 animate-fadeIn">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              WhatsApp Opened!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              We've prefilled your order for <strong>{template.name}</strong> with all your customization details. Press <span className="text-[#E44C1F] font-semibold">"Send"</span> in WhatsApp to deliver your brief to Abby.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-xs text-neutral-400 space-y-1.5 max-w-sm mx-auto">
              <p>• <strong>Template:</strong> {template.name}</p>
              <p>• <strong>Total Price:</strong> {template.currency}{template.price}</p>
              <p className="text-emerald-400 pt-1">
                ℹ️ Note: No payment was deducted. Abby will review your customization and send the UPI payment QR code directly on WhatsApp.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center rounded-full bg-[#E44C1F] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#ff5d2e] transition-all cursor-pointer"
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
