import React from "react";
import { Shield, CheckCircle, Clock } from "lucide-react";

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({}) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma vistoria veicular.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-32 mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vistori Louveira
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Serviços especializados em vistoria para carros, motos e caminhões
            em Louveira
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Contato WhatsApp
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Shield className="text-red-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-300">
                Vistoria completa e detalhada para sua segurança
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-red-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Agilidade</h3>
              <p className="text-gray-300">Processo rápido e eficiente</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-red-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-300">
                Profissionais qualificados e experientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
