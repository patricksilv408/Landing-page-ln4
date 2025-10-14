import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const slides = [
  {
    img: "/images/leisure-pool.webp",
    title: "Piscinas adulto e infantil",
    desc: "Lazer com vista e conforto o ano inteiro.",
  },
  {
    img: "/images/leisure-aerial.webp",
    title: "Vista Aérea do Empreendimento",
    desc: "Uma visão completa do paraíso que espera por você.",
  },
  {
    img: "/images/leisure-gym.webp",
    title: "Academia climatizada",
    desc: "Equipamentos completos para treinos eficientes.",
  },
  {
    img: "/images/leisure-beach-tennis.webp",
    title: "Beach Tennis",
    desc: "Quadra em areia para esporte e diversão.",
  },
  {
    img: "/images/leisure-plaza.webp",
    title: "Praças",
    desc: "Paisagismo autoral e áreas de estar ao ar livre.",
  },
  {
    img: "/images/leisure-entrance.webp",
    title: "Portaria",
    desc: "Arquitetura marcante e controle de acesso 24h.",
  },
];

export const Leisure = React.memo(() => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="lazer" className="relative py-20 bg-charcoal">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Lazer para toda a família</h2>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none rounded-lg overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
                    <CardContent className="flex items-center justify-center p-0 h-full">
                      <img 
                        src={slide.img} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width="1600"
                        height="900"
                        style={{ contentVisibility: index > 1 ? 'auto' : 'visible' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <h3 className="text-2xl font-semibold font-serif">{slide.title}</h3>
                        <p className="text-base">{slide.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-white bg-black/30 hover:bg-black/50 border-white/50" />
          <CarouselNext className="right-4 text-white bg-black/30 hover:bg-black/50 border-white/50" />
        </Carousel>
        
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                  current === index + 1 ? "w-6 bg-alphaville-green" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir para a imagem ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-sm text-white/60 font-mono tracking-widest">
            {current.toString().padStart(2, '0')} / {count.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20 hidden md:block text-right">
             <Button asChild size="lg" className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg px-8 py-6 text-base">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com Derlon
                </a>
            </Button>
            <p className="text-xs text-white/80 mt-2 max-w-xs ml-auto">
              Ao prosseguir, autorizo contato por WhatsApp, telefone e e-mail sobre o Alphaville Litoral Norte 4. Consulte a nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Política de Privacidade</a>.
            </p>
        </div>
      </div>
    </section>
  );
});