import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Leisure } from "@/components/Leisure";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="bg-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Leisure />
        {/* Placeholder sections can be added here */}
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;