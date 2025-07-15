import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "551938780509";
    const message =
      "Olá! Gostaria de mais informações sobre vistoria veicular.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Mapa de Louveira"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.573014837845!2d-46.95050568444223!3d-23.092270284982137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2fdf702a5a6b%3A0xb94d4744aba095ed!2sAv.%20Silv%C3%A9rio%20Finamore%2C%201019%20-%20Jardim%20Vera%20Cruz%2C%20Louveira%20-%20SP%2C%2013270-000!5e0!3m2!1spt-BR!2sbr!4v1689319701360!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <a href="tel:+551938780509" className="hover:underline">
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

        <div className="border-t border-gray-800 mt-12 pt-8 text-center w-full max-w-5xl">
          <p className="text-gray-400">
            © 2025 Vistori Louveira. Todos os direitos reservados. Desenvolvido
            por <span className="inline-block">Sansch Agência</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
