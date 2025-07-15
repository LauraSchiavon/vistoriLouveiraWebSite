import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de mais informações sobre vistoria veicular.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h3 className="text-2xl font-bold">Vistori Louveira</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Especialistas em vistoria veicular em Louveira e região. 
              Oferecemos serviços profissionais e de qualidade para todos os tipos de veículos.
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
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>vistorilouveira@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Louveira, SP</span>
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