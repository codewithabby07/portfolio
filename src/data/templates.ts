export type WebsiteTemplate = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  currency: string;
  tagline: string;
  description: string;
  features: string[];
  previewImage: string;
  badge?: string;
  demoUrl: string;
  demoNotice: string;
  customizationFields: {
    senderName: boolean;
    receiverName: boolean;
    photoChange: boolean;
    customMessage: boolean;
  };
};

export const templates: WebsiteTemplate[] = [
  {
    id: "cute-apology",
    slug: "cute-apology",
    name: "Cute Apology Website",
    category: "Love & Relationships",
    price: 99,
    originalPrice: 499,
    currency: "₹",
    tagline: "The viral interactive cute apology website with sweet animations, romantic music, and heartfelt letters.",
    description:
      "A heartwarming and delightfully interactive digital letter to melt hearts and say sorry with cuteness. Includes custom names, romantic audio that autoplays softly, interactive questions with playful animations, and your own personalized message.",
    features: [
      "Personalized Sender & Receiver Names",
      "Interactive 'Forgive Me?' cute Yes/No animations",
      "Soft romantic background music (included & customizable)",
      "Optional personal photo inclusion",
      "Your custom emotional apology / love note",
      "Instant shareable private link for WhatsApp & Instagram",
      "Sub-second mobile load time on all iOS & Android devices",
    ],
    previewImage: "/templates/cute-apology/cover-v1.webp",
    badge: "Bestseller • ₹99",
    demoUrl: "/templates/cute-apology/index.html",
    demoNotice: "Preview Mode — This demo shows the live animations and music. When you order, we customize all names, photos, and messages for you.",
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
];

export function getTemplateBySlug(slug: string): WebsiteTemplate | undefined {
  return templates.find((t) => t.slug === slug || t.id === slug);
}
