
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-opendata-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Opendata<span className="text-opendata-yellow">Systems</span>
            </h3>
            <div className="flex items-center mb-4">
              <Flag size={18} className="text-red-600 mr-2" />
              <span className="text-opendata-yellow">Moçambique</span>
            </div>
            <p className="mb-6 text-gray-300">
              Transformando ideias em soluções digitais inovadoras para empresas
              de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1DHHEZVmus/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/opendatasystems.mz?igsh=MWNlODQ0cm9wejExdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Maputo, Matola, Malhampsene
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">+258 833634798 / 846903226</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">contato@opendatasystems.com.mz</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Fique por dentro das nossas novidades e lançamentos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 border border-gray-700 focus:outline-none focus:border-opendata-yellow text-white placeholder-gray-400"
              />
              <Button className="w-full bg-opendata-yellow hover:bg-opacity-90 text-opendata-blue font-semibold">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} OpendataSystems. Todos os direitos reservados.<br/>
            <span className="text-xs">Desenvolvido por OpendataSystems e Melvin Cumbe (Desenvolvedor Web)</span>
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fale Conosco button */}
        <div className="flex justify-center mt-10">
          <Button 
            onClick={scrollToContact}
            className="bg-opendata-yellow hover:bg-opacity-90 text-opendata-blue font-semibold px-8 py-3 text-lg animate-bounce"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
