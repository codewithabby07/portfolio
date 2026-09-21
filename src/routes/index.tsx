import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { IndustrySection } from "@/components/IndustrySection";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:url", content: `${site.url}/` },
    ],
  }),
});

function Home() {
  return (
    <>
      <Seo />
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        {/* 1. Cinematic Studio Hero with Sylva 3D Living World Backdrop */}
        <Hero />
        {/* 2. Selected Agency Work */}
        <Work />
        {/* 4. Studio Capabilities & Services */}
        <Services />
        {/* 5. Industry Verticals Showcase */}
        <IndustrySection />
        {/* 6. The Studio Methodology */}
        <Process />
        {/* 7. Frequently Asked Questions */}
        <Faq />
        {/* 8. Studio Positioning & Manifesto (Above Footer) */}
        <About />
        {/* 9. Final CTA Card Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
