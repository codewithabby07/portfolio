export type TemplateEditableField = {
  key: string;
  label: string;
  placeholder: string;
  type?: "text" | "textarea" | "select";
  required?: boolean;
  hint?: string;
  defaultValue?: string;
};

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
  ordersCount: number; // e.g. 400 to 2000
  rating: number; // e.g. 4.9
  reviewsCount: number;
  editableFields: TemplateEditableField[];
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
    ordersCount: 1840,
    rating: 4.9,
    reviewsCount: 342,
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
    badge: "Bestseller • 1.8k+ Sold",
    demoUrl: "https://blissful-fermi-sigma.vercel.app/birthday-wish-template/index.html",
    demoNotice: "Preview Mode — Test the live interactive cake, wrapped stats, and animations. When you order, all names, stats, photos, and letters are personalized for your birthday star.",
    editableFields: [
      { key: "birthdayPersonName", label: "Birthday Person Name (Star)", placeholder: "e.g. Kiara / Sneha", required: true },
      { key: "senderName", label: "Your Name (Sender)", placeholder: "e.g. Rahul / Abby", required: true },
      { key: "age", label: "Age Turning", placeholder: "e.g. 21 / 25" },
      { key: "birthdayDate", label: "Birthday Date", placeholder: "e.g. 14 November" },
      { key: "mainCharacterDays", label: "Wrapped Stat: 'Days you were the main character'", placeholder: "Default: 365" },
      { key: "topMood", label: "Wrapped Stat: 'Your top mood this year'", placeholder: "Default: Iconic (runner-up: hungry)" },
      { key: "birthdayLetter", label: "Heartfelt Unopened Letter & Memories", placeholder: "Write a personal message for the surprise gift box...", type: "textarea" },
    ],
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
  {
    id: "the-sorry-bear",
    slug: "the-sorry-bear",
    name: "The Sorry Bear",
    category: "Love & Relationships",
    price: 99,
    originalPrice: 429,
    currency: "₹",
    ordersCount: 1420,
    rating: 4.9,
    reviewsCount: 289,
    tagline: "Delightful interactive teddy bear apology microsite with cute animations.",
    description:
      "When a simple text isn't enough to melt their anger, send The Sorry Bear! Features an adorable animated sad bear, interactive apology prompts that playfully dodge rejection, customizable heartfelt letters, soft emotional audio, and a warm reconciliation finale.",
    features: [
      "Cute Animated Sad Bear with Playful Interactive Reactions",
      "Interactive 'Please Forgive Me' Buttons & Whimsical Effects",
      "Heartfelt Apology Letter with Custom Sender & Receiver Names",
      "Soft Acoustic & Lo-Fi Background Audio Included",
      "Optional Couple Memories & Photo Frame Integration",
      "Instant Private Link Delivered Direct to Your WhatsApp",
      "Guaranteed to Bring a Smile on Mobile & Desktop",
    ],
    previewImage: "/images/templates/the-sorry-bear.png",
    badge: "Viral Hit • 1.4k+ Sold",
    demoUrl: "https://the-sorry-bear-apology-website-temp.vercel.app",
    demoNotice: "Preview Mode — Watch the cute bear animations and playful interactions. Customized with your names and personal apologies upon order.",
    editableFields: [
      { key: "receiverName", label: "Their Name (Angry Cutie)", placeholder: "e.g. Kiara / My Love", required: true },
      { key: "senderName", label: "Your Name (Sender)", placeholder: "e.g. Rahul / Buddhu", required: true },
      { key: "apologyMessage", label: "Custom Apology Message", placeholder: "e.g. Please forgive me, I promise never to do this again...", type: "textarea" },
      { key: "reconciliationNote", label: "Final Warm Reconciliation Note", placeholder: "e.g. Can I take you out for your favourite ice cream tonight?" },
    ],
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
  {
    id: "birthday-premiere",
    slug: "birthday-premiere",
    name: "Birthday Premiere",
    category: "Birthday & Celebrations",
    price: 99,
    originalPrice: 429,
    currency: "₹",
    ordersCount: 960,
    rating: 4.8,
    reviewsCount: 195,
    tagline: "The viral cinema premiere ticket & movie countdown celebration experience.",
    description:
      "A blockbuster celebration format that turns their birthday into a grand movie premiere. Features an authentic customizable cinema ticket, movie-style opening credits countdown, personalized highlight reels and photo frames, celebration soundtracks, and a heartfelt director's cut personal note.",
    features: [
      "Personalized Movie Premiere Ticket with Date & Name",
      "Cinematic 5-4-3-2-1 Audio-Visual Intro Countdown",
      "Memories Highlight Reel & Custom Photo Slideshow",
      "Interactive Popcorn & Celebration Animation Moments",
      "Heartfelt Director's Cut Letter & Note Section",
      "Instant Shareable Private Link for WhatsApp & Instagram",
      "Smooth 60fps Experience on all Mobile Browsers",
    ],
    previewImage: "/images/templates/birthday-premiere.png",
    badge: "Trending • 950+ Sold",
    demoUrl: "https://birthday-premiere-website-template.vercel.app",
    demoNotice: "Preview Mode — Experience the movie-style premiere experience. When you order, your custom ticket details, names, photos, and letters are fully personalized.",
    editableFields: [
      { key: "starName", label: "Movie Star Name (Birthday Person)", placeholder: "e.g. Kiara / Queen of Drama", required: true },
      { key: "directorName", label: "Director Name (Your Name)", placeholder: "e.g. Rahul / Your #1 Fan", required: true },
      { key: "showTitle", label: "Show Title", placeholder: "Default: Saal Ka Sabse Bada Show" },
      { key: "awardTitle", label: "Award Given", placeholder: "Default: Best Human of the Year" },
      { key: "premiereDate", label: "Premiere Date & Time", placeholder: "e.g. 18 November • Prime Time" },
      { key: "scriptMessage", label: "Director's Cut Personal Letter", placeholder: "Write an epic birthday wish letter for them...", type: "textarea" },
    ],
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
  {
    id: "cute-birthday",
    slug: "cute-birthday",
    name: "Cute Birthday Surprise",
    category: "Birthday & Celebrations",
    price: 99,
    originalPrice: 499,
    currency: "₹",
    ordersCount: 820,
    rating: 4.9,
    reviewsCount: 168,
    tagline: "Dreamy celebration microsite with confetti, cake-cutting ceremony, and photo carousel.",
    description:
      "A heartwarming, pastel-toned birthday celebration website loaded with charm. Features a playful landing reveal, custom emotional birthday letter, interactive cake-cutting ceremony, sweet background melodies, and polaroid photo cards to make their birthday unforgettable.",
    features: [
      "Magical Surprise Landing Reveal with Confetti",
      "Personalized Sender & Birthday Recipient Names",
      "Interactive Cake-Cutting & Candle Blowing Action",
      "Polaroid Memory Cards & Slideshow Section",
      "Sweet Celebration Background Melodies Included",
      "Heartfelt Personal Message & Wish Cards",
      "Super Lightweight & Instant Mobile WhatsApp Sharing",
    ],
    previewImage: "/images/templates/cute-birthday.png",
    badge: "Popular • 800+ Sold",
    demoUrl: "https://cute-birthday-website-template-cuti.vercel.app",
    demoNotice: "Preview Mode — Test the dreamy animations, sound, and surprise reveal. When you order, your photos, messages, and names are placed seamlessly.",
    editableFields: [
      { key: "birthdayPersonName", label: "Birthday Person's Name", placeholder: "e.g. Kiara / Princess", required: true },
      { key: "senderName", label: "Your Name (Sender)", placeholder: "e.g. Rahul / Abby", required: true },
      { key: "birthdayDate", label: "Celebration Date", placeholder: "e.g. 24 October" },
      { key: "loveLetter", label: "Special Birthday Letter", placeholder: "Write your custom sweet birthday message...", type: "textarea" },
      { key: "wishesCard1", label: "Wish Card 1", placeholder: "Default: Always keep smiling that cute smile" },
      { key: "wishesCard2", label: "Wish Card 2", placeholder: "Default: May all your biggest dreams turn real this year" },
      { key: "wishesCard3", label: "Wish Card 3", placeholder: "Default: Endless happiness, good food, and great adventures" },
    ],
    customizationFields: {
      senderName: true,
      receiverName: true,
      photoChange: true,
      customMessage: true,
    },
  },
  {
    id: "cute-website-v2",
    slug: "cute-website-v2",
    name: "Cute Website v2 (secret.exe)",
    category: "Love & Relationships",
    price: 99,
    originalPrice: 499,
    currency: "₹",
    ordersCount: 1150,
    rating: 4.9,
    reviewsCount: 231,
    tagline: "Retro secret.exe password-locked love note with sweet interactive surprises.",
    description:
      "A nostalgic, retro computer aesthetic love website that feels like opening a classified love vault. The recipient enters a secret passcode or hint to unlock a charming digital love letter filled with animations, floating hearts, memories, and soft music.",
    features: [
      "Retro 'secret.exe' Password-Protected Digital Vault Intro",
      "Custom Secret Passcode / Hint Customized for Your Relationship",
      "Magical Unlock Reveal with Floating Hearts & Sweet Audio",
      "Heartfelt Romantic Letter & Interactive Cute Prompts",
      "Personalized Photo Memories & Cute Easter Eggs",
      "Works Seamlessly Across iPhone & Android Web Browsers",
      "Private Shareable Link Created Just for Your Person",
    ],
    previewImage: "/images/templates/cute-website-v2.png",
    badge: "Aesthetic • 1.1k+ Sold",
    demoUrl: "https://cute-website-v2-love-website-templa.vercel.app",
    demoNotice: "Preview Mode — Try unlocking secret.exe using the hint. When customized, you choose the passcode, names, and love note.",
    editableFields: [
      { key: "receiverName", label: "Recipient Name", placeholder: "e.g. My Cutie / Sneha", required: true },
      { key: "senderName", label: "Your Name (Sender)", placeholder: "e.g. Rahul / Abby", required: true },
      { key: "secretPassword", label: "Secret Unlock Password", placeholder: "e.g. iloveyou / ourspecialdate" },
      { key: "passwordHint", label: "Hint Text Shown on Lockscreen", placeholder: "Default: the three words I say most (iloveyou)" },
      { key: "recipientGreeting", label: "Screen 1 Greeting Headline", placeholder: "Default: to the person who makes life softer" },
      { key: "loveLetterText", label: "Romantic Letter in Screen 1", placeholder: "Write your heartfelt message here...", type: "textarea" },
      { key: "stickyNotes", label: "Sticky Notes (5 Sweet Reasons)", placeholder: "e.g. Your laugh, how caring you are, our late night talks..." },
    ],
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
    ordersCount: 2150,
    rating: 5.0,
    reviewsCount: 480,
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
    badge: "All-Time Bestseller • 2.1k+ Sold",
    demoUrl: "/templates/cute-apology/index.html",
    demoNotice: "Preview Mode — This demo shows the live animations and music. When you order, we customize all names, photos, and messages for you.",
    editableFields: [
      { key: "receiverName", label: "Their Name (Person you're apologizing to)", placeholder: "e.g. Sneha / My Love", required: true },
      { key: "senderName", label: "Your Name (Sender)", placeholder: "e.g. Rahul / Abby", required: true },
      { key: "customMessage", label: "Heartfelt Apology Note", placeholder: "Write your emotional apology message here...", type: "textarea" },
      { key: "cuteQuestion", label: "Interactive 'Forgive Me?' Text", placeholder: "Default: Will you forgive your silly cutie?" },
    ],
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
