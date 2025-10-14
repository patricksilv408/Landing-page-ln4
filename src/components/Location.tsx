import { memo, useState } from "react";
import { Button } from "./ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { MapPin, Send, Play } from "lucide-react";

const GOOGLE_MAPS_LINK = "https://maps.google.com/?q=-12.821301247381363,-38.285187344408456";
const GOOGLE_MAPS_DIRECTIONS_LINK = "https://www.google.com/maps/dir/?api=1&destination=-12.821301247381363,-38.285187344408456";

export const Location = memo(() => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="localizacao" className="py-20 bg-off-white text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Localização privilegiada</h2>
          <p className="max-w-3xl mx-auto text-lg text-charcoal/80">
            Entre a praia e a cidade — acesso pela Estrada do Coco (BA-099) e proximidade com serviços, comércio e lazer.
          </p>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden border border-subtle-gold/30 shadow-lg">
            <picture>
              <source srcSet="/images/location-map.webp" type="image/webp" />
              <img
                src="/images/location-map.webp"
                alt="Mapa ilustrado do Alphaville Litoral Norte 4 e entorno."
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
              />
            </picture>
          </div>

          <div className="rounded-lg overflow-hidden border border-subtle-gold/30 shadow-lg aspect-video relative">
            {!mapLoaded ? (
              <div 
                className="w-full h-full bg-matte-gray/10 flex flex-col items-center justify-center cursor-pointer hover:bg-matte-gray/20 transition-colors"
                onClick={() => setMapLoaded(true)}
              >
                <Play className="w-16 h-16 text-alphaville-green mb-4" />
                <p className="text-lg font-medium text-charcoal">Clique para carregar o mapa interativo</p>
                <p className="text-sm text-charcoal/60 mt-2">Google Maps</p>
              </div>
            ) : (
              <iframe
                src="https://maps.google.com/maps?q=-12.821301247381363,-38.285187344408456&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Alphaville Litoral Norte 4 no Google Maps"
              ></iframe>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-end gap-4">
          <Button asChild variant="outline" size="lg" className="border-subtle-gold text-subtle-gold hover:bg-subtle-gold hover:text-charcoal rounded-lg text-base gap-2">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} /> Abrir no Google Maps
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-subtle-gold text-subtle-gold hover:bg-subtle-gold hover:text-charcoal rounded-lg text-base gap-2">
            <a href={GOOGLE_MAPS_DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer">
              <Send size={18} /> Traçar rota
            </a>
          </Button>
          <Button asChild size="lg" className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Falar com Derlon
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});