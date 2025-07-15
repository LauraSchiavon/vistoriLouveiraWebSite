import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

interface HeaderProps {
  onScheduleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
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
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img
            src="/logo.jpeg"
            alt="Vistori Louveira"
            className="w-30 h-20 mb-4 rounded-lg"
          />

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone size={20} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
