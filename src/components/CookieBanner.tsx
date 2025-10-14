"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent_status";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-matte-gray-dark/95 backdrop-blur-sm p-4 z-50 border-t border-matte-gray-dark shadow-2xl animate-slide-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-off-white/90">
          <Cookie className="w-8 h-8 mt-1 flex-shrink-0 text-subtle-gold" />
          <p className="text-sm">
            Usamos cookies para garantir que você tenha a melhor experiência em nosso site. Para saber mais, acesse nossa{" "}
            <a href="/politica-de-privacidade" className="underline hover:text-white font-semibold">
              Política de Privacidade
            </a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
          <Button
            variant="outline"
            className="w-full border-subtle-gold text-subtle-gold hover:bg-subtle-gold hover:text-charcoal"
            onClick={handleAcceptNecessary}
          >
            Apenas necessários
          </Button>
          <Button
            className="w-full bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold"
            onClick={handleAcceptAll}
          >
            Aceitar todos
          </Button>
        </div>
      </div>
    </div>
  );
};