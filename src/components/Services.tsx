import React from "react";
import { Car, Truck, Bike, CheckCircle } from "lucide-react";

const Services: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de agendar uma vistoria veicular.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const services = [
    {
      icon: <Car className="w-12 h-12 text-red-600" />,
      title: "Vistoria de Carros",
      description:
        "Vistoria completa para veículos de passeio, incluindo verificação de documentos e inspeção técnica.",
      features: [
        "Verificação de documentos",
        "Inspeção visual",
        "Teste de sistemas",
      ],
    },
    {
      icon: <Bike className="w-12 h-12 text-red-600" />,
      title: "Vistoria de Motos",
      description:
        "Serviço especializado para motocicletas com foco em segurança e documentação.",
      features: [
        "Inspeção de segurança",
        "Verificação de chassi",
        "Documentação",
      ],
    },
    {
      icon: <Truck className="w-12 h-12 text-red-600" />,
      title: "Vistoria de Caminhões",
      description:
        "Vistoria técnica para veículos comerciais e de carga com rigor profissional.",
      features: [
        "Inspeção técnica",
        "Verificação de carga",
        "Documentação comercial",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos serviços completos de vistoria veicular para todos os
            tipos de veículos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-800 mt-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleWhatsAppClick}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Fazer Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
