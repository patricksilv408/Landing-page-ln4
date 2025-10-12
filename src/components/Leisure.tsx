import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const slides = [
  {
    img: "/images/pool.jpg",
    title: "Piscinas adulto e infantil",
    desc: "Lazer com vista e conforto o ano inteiro.",
  },
  {
    img: "/images/gourmet.jpg",
    title: "Espaço Gourmet",
    desc: "Perfeito para encontros com família e amigos.",
  },
  {
    img: "/images/gym.jpg",
    title: "Academia climatizada",
    desc: "Equipamentos completos para treinos eficientes.",
  },
  {
    img: "/images/beach-tennis.jpg",
    title: "Beach Tennis",
    desc: "Quadra em areia para esporte e diversão.",
  },
  {
    img: "/images/plaza.jpg",
    title: "Praças",
    desc: "Paisagismo autoral e áreas de estar ao ar livre.",
  },
  {
    img: "/images/entrance.jpg",
    title: "Portaria",
    desc: "Arquitetura marcante e controle de acesso 24h.",
  },
];

export function Leisure() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true })
  );

  return (
    <section id="lazer" className="relative py-20 bg-charcoal">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Lazer para toda a família</h2>
        <Carousel
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
                  <Card className="border-none rounded-lg overflow-hidden relative aspect-video">
                    <CardContent className="flex items-center justify-center p-0 h-full">
                      <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
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
        <div className="absolute bottom-12 right-12 z-20 hidden md:block">
             <Button asChild size="lg" className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg px-8 py-6 text-base">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com Derlon
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}