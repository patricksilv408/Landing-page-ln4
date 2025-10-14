import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Phone } from "lucide-react";
import { memo } from "react";

export const StickyCTA = memo(() => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-matte-gray/90 backdrop-blur-sm pt-3 px-3 pb-2 z-40 md:hidden border-t border-matte-gray-dark">
      <Button asChild className="w-full bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg py-6 text-base">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          <Phone size={18} />
          Falar com Derlon
        </a>
      </Button>
      <p className="text-[11px] text-white/70 text-center mt-2">
        Ao prosseguir, autorizo contato por WhatsApp, telefone e e-mail. Consulte a nossa <a href="/politica-de-privacidade" className="underline">Política de Privacidade</a>.
      </p>
    </div>
  );
});