import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message =
      "Olá! Gostaria de mais informações sobre vistoria veicular.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.jpeg"
                alt="Vistori Louveira"
                className="w-30 h-20 mb-4 rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Especialistas em vistoria veicular em Louveira e região.
              Oferecemos serviços profissionais e de qualidade para todos os
              tipos de veículos.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Falar no WhatsApp
            </button>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:+5511999999999" className="hover:underline">
                  (11) 9999-9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <a
                  href="mailto:vistorilouveira@gmail.com"
                  className="hover:underline"
                >
                  vistorilouveira@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <a
                  href="https://www.google.com.br/maps/place/Vistori+Vistoria+Veicular/@-23.0944732,-46.9645145,16z/data=!4m10!1m2!2m1!1sAv.+Silv%C3%A9rio+Finamore,+1019+(sa%C3%ADda+para+Jundia%C3%AD)+-+Bairro+Jardim+Vera+Cruz+-+Louveira%2FSP!3m6!1s0x94cf2fdf702a5a6b:0xb94d4744aba095ed!8m2!3d-23.0922703!4d-46.9486948!15sCltBdi4gU2lsdsOpcmlvIEZpbmFtb3JlLCAxMDE5IChzYcOtZGEgcGFyYSBKdW5kaWHDrSkgLSBCYWlycm8gSmFyZGltIFZlcmEgQ3J1eiAtIExvdXZlaXJhL1NQWlUiU2F2IHNpbHbDqXJpbyBmaW5hbW9yZSAxMDE5IHNhw61kYSBwYXJhIGp1bmRpYcOtIGJhaXJybyBqYXJkaW0gdmVyYSBjcnV6IGxvdXZlaXJhIHNwkgEWY2FyX2luc3BlY3Rpb25fc3RhdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOM2ExbDFOMlpuRUFFqgGzAQoJL20vMDFoZDU4CgkvbS8wNDFwNTEQASofIhtzYcOtZGEgcGFyYSBqdW5kaWHDrSBiYWlycm8oDDIfEAEiGxh16QejwDB9LUfCBFvtxS7eQCfAiydM0_Ez-zJXEAIiU2F2IHNpbHbDqXJpbyBmaW5hbW9yZSAxMDE5IHNhw61kYSBwYXJhIGp1bmRpYcOtIGJhaXJybyBqYXJkaW0gdmVyYSBjcnV6IGxvdXZlaXJhIHNw4AEA-gEECAAQFw!16s%2Fg%2F11gh_ll3gm?hl=pt-BR&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Louveira, SP
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Horário</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <div>Segunda a Sexta</div>
                  <div className="text-sm text-gray-400">08:00 - 18:00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <div>Sábado</div>
                  <div className="text-sm text-gray-400">08:00 - 12:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Vistori Louveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
