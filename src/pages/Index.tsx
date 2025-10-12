import { Suspense, lazy } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StickyCTA } from "@/components/StickyCTA";

// Lazy load components that are below the fold to improve initial page load time.
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const Leisure = lazy(() => import("@/components/Leisure").then(module => ({ default: module.Leisure })));
const Location = lazy(() => import("@/components/Location").then(module => ({ default: module.Location })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(module => ({ default: module.ContactForm })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  return (
    <div className="bg-charcoal">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="w-full h-screen bg-charcoal" />}>
          <About />
          <Leisure />
          <Location />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <StickyCTA />
    </div>
  );
};

export default Index;