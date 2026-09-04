export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: {
    src: string;
    alt: string;
    caption?: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      note?: string;
      quote?: { text: string; attribution?: string };
      image?: { src: string; alt: string; caption?: string };
    }[];
    conclusion: string;
  };
}

export const posts: BlogPost[] = [
  {
    slug: "how-i-build-websites-in-6-to-7-days",
    title: "How I Actually Build and Ship Websites in 6–7 Days",
    excerpt:
      "Most agencies tell clients it'll take 3 months. I've been delivering production-ready websites in under a week for 3 years. Here's exactly how — the process, the tools, and the decisions that make it work.",
    date: "September 3, 2026",
    readTime: "5 min read",
    category: "Process",
    tags: ["Process", "React", "Next.js", "Freelance"],
    coverImage: {
      src: "/images/about-still.jpg",
      alt: "Clean architectural workspace — sunlit wall with geometric shadow",
      caption: "Every website starts with a clean architecture decision.",
    },
    content: {
      intro:
        "The first time a client asked me 'How fast can you build this?', I said 2 weeks. They looked disappointed. Their previous agency had quoted 4 months. That's when I realised the gap isn't technical — it's structural. Agencies are slow because of how they're built: account managers, design handoffs, approval chains, internal review cycles. None of that has anything to do with actually writing code.\n\nI work solo. I talk directly to you. When you say 'change this button colour', it's done in 15 minutes, not next week after someone logs a ticket. That's where the 6–7 days comes from.",
      sections: [
        {
          heading: "Day 1–2: I ask annoying questions before touching any code",
          body: [
            "Most developers want to jump straight into Figma or start typing. I've learned that's exactly the wrong move. The first thing I do is talk to the client — sometimes for two hours.",
            "I want to know: Who is your actual customer? What do you want them to do on this website? What have you tried before that didn't work? What do your competitors do that you hate?",
            "This phase saves me from building the wrong thing beautifully. I'd rather spend 4 hours in discovery than 3 days rebuilding a homepage because the CTA was wrong.",
            "At the end of Day 2, you have a sitemap, a wireframe with content hierarchy, and a clear agreement on what we're building. No surprises after this point.",
          ],
          note: "I use FigJam for wireframes. It's messy, collaborative, and doesn't pretend to be a finished design — which is exactly the point at this stage.",
        },
        {
          heading: "Day 3–4: Building the thing",
          body: [
            "This is where I go quiet. Notifications off, editor open, coffee ready.",
            "I use Next.js as my base because it handles routing, SSR, image optimisation, and API routes out of the box. No wiring up a dozen libraries to do what Next.js does natively. I write in TypeScript — not because it's trendy, but because catching a type error at compile time is a lot better than debugging undefined is not a function at 11pm.",
            "Design goes straight into Tailwind. No CSS files, no fighting specificity. If a client shows me a reference site they like, I can have a matching visual direction running in under an hour.",
            "By end of Day 4, you have a working frontend. Navigable, responsive, and looking like the actual finished thing — not a prototype.",
          ],
          image: {
            src: "/images/projects/mainframe.jpg",
            alt: "Mainframe SaaS project screenshot — clean dark UI with smooth transitions",
            caption: "Mainframe: Built in 5 days. Shipped to production on Day 6.",
          },
        },
        {
          heading: "Day 5–6: The boring stuff that actually matters",
          body: [
            "Contact forms, email integrations, CMS hookup if needed, speed audits, cross-browser checks, mobile testing on real devices (not just Chrome DevTools). This is the part most agencies skip or rush — and it's where sites break in production.",
            "I run Lighthouse on every page. The target is above 90 on performance and 100 on accessibility and SEO. If something scores badly, I fix it before handover.",
            "SSL setup, environment variables, domain configuration, robots.txt, sitemap — all done before the final call.",
          ],
          quote: {
            text: "I once found a client's previous website was loading a 14MB uncompressed hero image. Their mobile load time was 11 seconds. We got it down to 1.2s. That one change alone was worth the entire project fee.",
            attribution: "Real example, 2025",
          },
        },
        {
          heading: "Day 7: Handover without the mystery",
          body: [
            "The handover call is usually 30–45 minutes. I walk through every page, explain every decision, and answer every question. If you want to be able to update your own content, I show you how. If you want me to keep maintaining it, we set that up too.",
            "I send a short document after: what's live, what credentials are where, what to watch for, and how to reach me if something breaks.",
            "That's it. No surprise invoices. No 'oh we forgot to include X' after launch.",
          ],
        },
      ],
      conclusion:
        "I'm not claiming I'm faster because I'm some kind of 10x developer. I'm faster because I cut out everything that slows projects down without actually improving them. If you need a website for your business and you don't want to wait 3 months or deal with 5 different people, let's talk. I'll tell you honestly whether I can help.",
    },
  },
  {
    slug: "nextjs-vs-wordpress-business-websites",
    title: "Next.js vs WordPress: I've Used Both. Here's My Honest Take.",
    excerpt:
      "Not a sponsored comparison, not a sales pitch. I've built on WordPress for years and I've switched most of my clients away from it. Here's what I actually think — including when WordPress is still the right answer.",
    date: "August 28, 2026",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Next.js", "React", "WordPress", "Web Performance"],
    coverImage: {
      src: "/images/projects/zainca.jpg",
      alt: "Zainca e-commerce store — built on Next.js with custom storefront",
      caption: "Zainca: Migrated from WooCommerce to a custom Next.js storefront. Load time dropped from 6s to 0.9s.",
    },
    content: {
      intro:
        "I built on WordPress for the first two years of my freelance work. I'm not one of those developers who's never actually used it and just dunks on it to sound clever. I've built themes, maintained plugins, fixed hacked wp-admin dashboards at 2am, and watched Elementor eat itself on a client's staging server.\n\nSo when I say I've moved most of my clients away from WordPress, I mean it with full context. Here's the real comparison.",
      sections: [
        {
          heading: "Speed: this is where it gets embarrassing for WordPress",
          body: [
            "A default WordPress install on shared hosting, with WooCommerce, Yoast, Elementor, and 8 other plugins? I've seen those sites take 12 seconds to load on mobile. That's not an edge case — it's pretty normal.",
            "The issue is architectural. WordPress generates pages on every request — it queries the database, runs PHP, assembles HTML, and sends it back. Every. Single. Time. Even with caching plugins, you're fighting an uphill battle.",
            "Next.js pages are pre-built at deploy time or fetched from edge servers near your user. There's no PHP, no database query per request, no plugin overhead. I've measured Next.js sites loading in under 800ms on 4G mobile connections consistently.",
          ],
          quote: {
            text: "One of my clients was running Google Ads and spending ₹40,000/month. Their landing page took 8 seconds to load. We rebuilt it in Next.js. Load time: 1.1s. Their cost per conversion dropped by 60% within 3 weeks.",
            attribution: "Client project, early 2026",
          },
        },
        {
          heading: "Security: the part WordPress people don't like talking about",
          body: [
            "This isn't FUD. WordPress runs 43% of the internet, which makes it the biggest target for automated attacks. The /wp-admin login page gets hit by bots constantly. A single outdated plugin — not even a major one, just a forgotten review widget or a form builder — can be the entry point for a full site compromise.",
            "I've cleaned up two hacked WordPress sites for clients. Both times, the entry point was a plugin that hadn't been updated in 8 months.",
            "A static Next.js site doesn't have a publicly accessible admin panel. There's no PHP execution surface. Your \"attack surface\" — the technical term for what attackers can target — is basically zero. There's nothing to attack.",
          ],
          note: "If you're on WordPress: update everything, delete plugins you're not using, enable 2FA on wp-admin. Seriously.",
        },
        {
          heading: "Design: WordPress themes are both a blessing and a trap",
          body: [
            "WordPress themes make it easy to get something up fast. They're also why so many business websites look like the same 4 designs with different logos.",
            "With React and Tailwind CSS, I'm working with a blank canvas. The layout, the spacing, the motion, the hover states — everything is intentional, not inherited from a template. It takes longer upfront but the result is a website that actually looks like your brand.",
            "Elementor and similar page builders have gotten better, but they still generate bloated HTML. I've opened the source of Elementor-built pages and found 12 nested divs around a single paragraph. That's not how the web is supposed to work.",
          ],
          image: {
            src: "/images/projects/dentiva.jpg",
            alt: "Dentiva dental clinic website — clean minimal medical design",
            caption: "Dentiva Dental: Built from scratch in React. No templates, no theme constraints.",
          },
        },
        {
          heading: "So when should you still use WordPress?",
          body: [
            "Here's where I might surprise you: WordPress is still the right tool sometimes.",
            "If your business runs on a specific WordPress plugin that has no equivalent elsewhere — WooCommerce for a complex product catalogue, or a specific booking system — staying on WordPress might genuinely be the better decision. Migrating away from it just to be on a \"modern stack\" isn't worth the disruption.",
            "If you have a large internal team who already knows how to manage a WordPress CMS and you just need a design refresh, rebuilding the whole stack might not be the right use of budget.",
            "And if you're running a simple blog with no performance requirements and no design ambitions, WordPress is perfectly fine.",
          ],
        },
      ],
      conclusion:
        "For most business websites — landing pages, portfolio sites, service pages, product launches — Next.js is significantly better in every technical dimension. Faster, more secure, more flexible, and actually fun to build. But 'use the right tool for the job' is genuinely the answer, not just a cop-out. If you want an honest assessment of what your specific situation needs, message me.",
    },
  },
  {
    slug: "case-study-alp-buildcon-custom-architecture",
    title: "ALP Buildcon: What Happens When a Real Estate Website Actually Loads Fast",
    excerpt:
      "A real estate firm with multi-crore projects was losing mobile visitors in under 3 seconds. Here's what we built, what broke during development, and what actually changed after launch.",
    date: "August 15, 2026",
    readTime: "7 min read",
    category: "Case Study",
    tags: ["Case Study", "Real Estate", "Next.js", "Performance"],
    coverImage: {
      src: "/images/projects/alp-buildcon.jpg",
      alt: "ALP Buildcon website — modern real estate architecture with dark premium aesthetic",
      caption: "ALP Buildcon: from 8-second load time to under 1.4 seconds.",
    },
    content: {
      intro:
        "ALP Buildcon came to me through a referral. Their old website had been built 3 years earlier by a local agency, and nobody had touched it since. The brief was vague: 'make it better.' After about 20 minutes of looking at it, the problem was obvious — it was loading 18MB of images on the homepage, had no mobile layout to speak of, and the contact form had been broken for who knows how long.\n\nHere's what the rebuild actually looked like.",
      sections: [
        {
          heading: "The diagnosis: what was actually wrong",
          body: [
            "Before writing a single line of code, I spent a day auditing the existing site. Google PageSpeed Insights showed a Performance score of 31 on mobile. The Largest Contentful Paint — the metric that measures when the main content appears — was 9.4 seconds.",
            "The images were the biggest problem. The hero image was a 6MB JPEG, full resolution, no compression, no modern format. Every project image was the same. The site was essentially sending a photography portfolio's worth of data on every pageload.",
            "The second problem: no clear conversion path. The most important thing on a real estate developer's website is getting a potential buyer to call or fill out an enquiry. The contact button was hidden in the footer. On mobile, there was no fixed CTA at all.",
          ],
          quote: {
            text: "The contact form had been broken for at least 6 months. Nobody on the client side had noticed because they were getting enquiries through word of mouth. We were just leaving conversions on the table.",
            attribution: "Post-audit finding",
          },
        },
        {
          heading: "What we built and why",
          body: [
            "The stack: Next.js 14, TypeScript, Tailwind CSS, deployed on Vercel with a CDN edge network. For the images, we converted everything to WebP and AVIF using Next.js Image — the browser picks the best format it supports automatically. The 6MB hero image became 340KB. Every project thumbnail went from an average of 2MB to under 80KB.",
            "For the project gallery, I built a filter interface that lets visitors switch between residential and commercial projects without a page reload. This sounds simple but it required some thought about how to structure the data — the previous site had no filtering at all, just a flat scrolling list.",
            "The mobile experience got a complete overhaul. Sticky call and WhatsApp buttons, a project inquiry form that actually submits, a working project image lightbox that works on touch screens.",
          ],
          image: {
            src: "/images/projects/alp-buildcon.jpg",
            alt: "ALP Buildcon redesigned project gallery with filter interface",
            caption: "The new project gallery with residential/commercial filtering and instant load.",
          },
          note: "One thing that nearly caused a problem: the client's project images were scattered across two different Google Drives and one Dropbox. It took half a day just to collect and organise the assets before we could optimise them.",
        },
        {
          heading: "What actually happened after launch",
          body: [
            "I don't love the '3x results!' style case study writing — it usually means someone picked the best-looking metric and ignored everything else. So here's the full picture.",
            "Mobile Performance score: 31 before, 97 after. That's real and consistent across multiple audits.",
            "The contact form started getting submissions on Day 1. The client said they received 4 enquiries in the first week, which they described as more than they'd gotten from the website in the previous year combined. I can't verify that claim independently, but that's what they told me.",
            "WhatsApp click-throughs increased significantly — we added a floating button that wasn't there before, so this was largely additive rather than a conversion improvement.",
            "The one thing that didn't change as fast as expected: organic search traffic. SEO takes time. We set up the technical foundations correctly, but ranking improvements happen over months, not days.",
          ],
        },
        {
          heading: "The honest part: what I'd do differently",
          body: [
            "The project gallery filter I built works well, but I built it in a way that's slightly harder to maintain than it needed to be. The data structure for projects is a bit tangled — if I was starting fresh, I'd separate the project metadata from the display logic more cleanly.",
            "I also underestimated how long the asset collection and optimisation would take. I built that time into future project estimates after this one.",
          ],
        },
      ],
      conclusion:
        "The ALP Buildcon project is a good example of what 'website improvement' actually looks like in practice: less about dramatic redesigns, more about fixing the things that are quietly killing your conversion rate. If you're not sure whether your website is costing you business, I can audit it and give you an honest answer in a couple of hours.",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
