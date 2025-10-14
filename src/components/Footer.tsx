import { WHATSAPP_LINK } from "@/lib/constants";
import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="bg-matte-gray-dark text-off-white/70 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <img 
          src="/images/logo-derlon-alves.png" 
          alt="Derlon Alves Logo" 
          className="h-28 w-auto mx-auto mb-6 rounded-lg" 
          loading="lazy" 
          decoding="async"
          width="112"
          height="112"
        />
        <div className="mb-6 space-y-2">
          <p className="font-semibold text-off-white">Site oficial do corretor: Derlon Alves — CRECI 25.820</p>
          <p>Imobiliária: Imóvel Fácil (CRECI: 1626J) • Camaçari–BA</p>
          <p>Endereço: Rua Jorge Amado, 49 - Shopping Camaçari Open Center - Centro - Camaçari/BA</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block pt-2 hover:text-alphaville-green transition-colors">
            (71) 99211-7523
          </a>
        </div>
        <div className="max-w-3xl mx-auto text-xs text-off-white/50 space-y-3 border-t border-off-white/20 pt-6">
          <p>
            Este é um site independente do corretor autorizado para divulgação do Alphaville Litoral Norte 4 e não é o site oficial da Alphaville Urbanismo.
          </p>
          <p>
            Imagens ilustrativas. Condições sujeitas a alteração e disponibilidade.
          </p>
          <p>
            © {new Date().getFullYear()} Alphaville Litoral Norte 4. Todos os direitos reservados. <a href="/politica-de-privacidade" className="underline hover:text-white">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </footer>
  );
});