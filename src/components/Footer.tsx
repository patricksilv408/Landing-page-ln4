import { WHATSAPP_LINK } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-matte-gray-dark text-off-white/70 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <img src="/images/logo-white.jpg" alt="Alphaville Litoral Norte 4" className="h-12 mx-auto mb-6" />
        <div className="mb-4">
          <p className="font-semibold text-off-white">Derlon Alves — CRECI 25.820</p>
          <p>Imobiliária Imóvel Fácil</p>
        </div>
        <div className="mb-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-alphaville-green transition-colors">
            (71) 99211-7523
          </a>
        </div>
        <p className="text-xs text-off-white/50">
          © {new Date().getFullYear()} Alphaville Litoral Norte 4. Todos os direitos reservados. As imagens são meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
};