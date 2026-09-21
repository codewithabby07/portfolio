import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { ContactCTA } from "@/components/ContactCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

export default function App() {
  return (
    <>
      <Seo />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Skills />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
