import React from "react";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      number: "5+",
      label: "Anos de Experiência",
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      number: "5000+",
      label: "Clientes Atendidos",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      number: "Sem Fila",
      label: "Vistoria na Hora",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      number: "100%",
      label: "Louveira e Região",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre a Vistori Louveira
            </h2>
            <p className="text-xl text-gray-600">
              Somos uma empresa especializada em vistoria veicular, oferecendo
              serviços de qualidade para Louveira e região há mais de 10 anos.
            </p>
          </div>

          <div className="bg-red-600 text-white grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 rounded-lg p-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center "
              >
                <div className="flex justify-center font-bold text-3xl ">
                  {stat.number}
                </div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg ">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Por que escolher a Vistori Louveira?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Profissionais Qualificados
                    </h4>
                    <p className="text-gray-600">
                      Equipe especializada e certificada
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Atendimento Personalizado
                    </h4>
                    <p className="text-gray-600">
                      Cada cliente é único para nós
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Processo Ágil
                    </h4>
                    <p className="text-gray-600">Vistoria rápida e eficiente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Preços Justos
                    </h4>
                    <p className="text-gray-600">
                      Melhor custo-benefício da região
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
