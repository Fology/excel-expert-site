import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Proposta Enviada!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Sua solicitação foi recebida com sucesso! Entraremos em contato em até 24 horas.
          </p>
          <div className="space-y-2">
            <a href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Site
              </Button>
            </a>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => {
                const phoneNumber = "5511999999999"; // ← SEU NÚMERO
                const message = "Olá! Acabei de enviar uma proposta pelo site e gostaria de falar com você.";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
