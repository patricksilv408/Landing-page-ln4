import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { memo } from "react";

export const Hero = memo(() => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-entrance.webp')" }}
      ></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <span className="absolute top-20 right-8 text-sm bg-subtle-gold/20 text-subtle-gold border border-subtle-gold rounded-full px-4 py-1 hidden md:block">
          Lançamento exclusivo — unidades limitadas
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight tracking-tight mb-4 max-w-4xl">
          Alphaville Litoral Norte 4 — viver o alto padrão entre a natureza e a cidade.
        </h1>
        <p className="text-lg md:text-xl font-sans max-w-3xl mb-8">
          Lotes amplos em um projeto exclusivo, com lazer completo, segurança e localização estratégica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg px-8 py-6 text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Quero falar agora
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-off-white text-off-white hover:bg-off-white hover:text-charcoal rounded-lg px-8 py-6 text-base">
            <a href="#contato">
              Receber condições de lançamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});