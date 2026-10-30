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
    id: "birthday-wish",
    slug: "birthday-wish",
    name: "Interactive Birthday Wish Website",
    category: "Birthday & Celebrations",
    price: 99,
    originalPrice: 499,
    currency: "₹",
    tagline: "Viral iOS lockscreen buzz intro, Spotify-style 'Year Wrapped' stats, interactive candle blow-out, and heartfelt letter.",
    description:
      "A cinematic, ultra-engaging birthday experience designed to make someone feel truly special. Features a realistic phone lockscreen notification intro, a personalized 'Year in Review Wrapped' stats card series, an interactive birthday cake where they hold to wish and tap flames to blow out the candles, and an unopened gift box with your customized memories and photos.",
    features: [
      "Realistic iOS Lockscreen Notification Buzz Intro",
      "Spotify-Style 'Your Year, Wrapped' Personalized Stats Cards",
      "Interactive 3D Cake with Hold-to-Wish & Tap-to-Blow Candles",
      "Surprise Unopened Gift Box with Private Letter & Photos",
      "Atmospheric Celebration Music & Sound Effects Included",
      "Custom Sender & Birthday Star Name Personalization",
      "Instant Shareable Private Link for WhatsApp & Instagram",
    ],
    previewImage: "/images/templates/birthday-wish.png",
    badge: "Trending • ₹99",
    demoUrl: "https://blissful-fermi-sigma.vercel.app/birthday-wish-template/index.html",
    demoNotice: "Preview Mode — Test the live interactive cake, wrapped stats, and animations. When you order, all names, stats, photos, and letters are personalized for your birthday star.",
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
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
