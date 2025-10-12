import { Square, Trees, ShieldCheck, PenTool, Building } from "lucide-react";

const features = [
  { icon: Square, text: "Lotes a partir de 360 m²" },
  { icon: Trees, text: "Áreas verdes extensas" },
  { icon: ShieldCheck, text: "Segurança 24h" },
  { icon: PenTool, text: "Projeto e paisagismo assinados" },
  { icon: Building, text: "Clube de lazer completo" },
];

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-off-white text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Um loteamento residencial Alphaville em Abrantes (Camaçari), planejado para quem busca conforto, segurança 24h, lazer completo e integração real com áreas verdes. Projeto contemporâneo, paisagismo autoral e infraestrutura de alto padrão.
        </p>
        <div className="mt-12 border-t border-subtle-gold/30 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-8 h-8 text-subtle-gold mb-3" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};