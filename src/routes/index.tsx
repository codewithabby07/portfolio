import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Faq } from "@/components/Faq";
import { ContactCTA } from "@/components/ContactCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.brand },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:url", content: site.url },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { property: "og:image:secure_url", content: `${site.url}/images/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ],
  }),
});

function Home() {
  return (
    <>
      <Seo />
      <ScrollProgress />
      <MobileActionBar />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Process />
        <Testimonials />
        <Services />
        <Skills />
        <Faq />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
