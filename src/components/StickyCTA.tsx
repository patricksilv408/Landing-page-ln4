import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Phone } from "lucide-react";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-matte-gray/90 backdrop-blur-sm p-3 z-40 md:hidden border-t border-matte-gray-dark">
      <Button asChild className="w-full bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg py-6 text-base">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          <Phone size={18} />
          Falar com Derlon
        </a>
      </Button>
    </div>
  );
};