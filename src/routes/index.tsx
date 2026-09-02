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
