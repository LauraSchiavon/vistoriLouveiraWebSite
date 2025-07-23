import React from "react";

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const phoneNumber = "551938780509";
  const message = "Olá! Gostaria de agendar uma vistoria veicular.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-32 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <img
            src="/hero.png"
            alt="Vistoria Veicular"
            className="w-[90%] lg:w-[30%] rounded-2xl shadow-2xl object-cover"
          />

          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vistori Louveira
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Serviços especializados em vistoria para carros, motos e caminhões
              em Louveira
            </p>

            <div className="flex justify-center md:justify-start mb-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Contato WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
