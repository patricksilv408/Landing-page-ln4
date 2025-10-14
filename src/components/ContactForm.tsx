import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { memo } from "react";

export const ContactForm = memo(() => {
  return (
    <section id="contato" className="py-20 bg-off-white text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <h2 className="text-4xl font-serif mb-4">Receba as condições de lançamento</h2>
        <p className="text-muted-foreground mb-8">Preencha o formulário abaixo e entraremos em contato.</p>
        <form className="space-y-6 text-left">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome completo" className="bg-white" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" className="bg-white" />
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input id="whatsapp" placeholder="(71) 99999-9999" className="bg-white" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Autorizo contato para envio de informações.
            </label>
          </div>
          <Button type="submit" size="lg" className="w-full bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg text-base">
            Quero receber agora
          </Button>
          <p className="text-xs text-center text-muted-foreground pt-2">
            Ao prosseguir, você concorda com a nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline hover:text-charcoal">Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </section>
  );
});