
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs: React.FC = () => {
  const features = [
    "Mais de 10 anos de experiência no mercado",
    "Equipe especializada em tecnologia e inovação",
    "Suporte técnico 24/7",
    "Soluções personalizadas para cada cliente",
    "Compromisso com resultados",
    "Tecnologia de ponta para melhor desempenho"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-opendata-blue">Sobre Nós</h2>
        <p className="section-subtitle">
          Conheça a OpendataSystems e nossa missão de transformar o universo digital
          das empresas com soluções inovadoras e personalizadas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="bg-opendata-blue h-64 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">OpendataSystems</span>
              </div>
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-opendata-yellow rounded-lg -z-10"></div>
            <div className="absolute bottom-16 right-16 w-32 h-32 bg-white p-4 rounded-lg shadow-lg border border-gray-100 z-20 flex flex-col items-center justify-center">
              <span className="text-opendata-blue text-4xl font-bold">10+</span>
              <span className="text-center text-sm">Anos de Experiência</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-opendata-blue mb-4">
              Excelência em Serviços Digitais
            </h3>
            <p className="text-gray-600 mb-6">
              Fundada há mais de 10 anos, a OpendataSystems nasceu com o propósito de 
              fornecer soluções digitais de qualidade para empresas de todos os portes. 
              Nossa jornada começou com serviços de hospedagem e hoje oferecemos um 
              ecossistema completo de soluções para sua presença online.
            </p>
            <p className="text-gray-600 mb-6">
              Contamos com uma equipe de profissionais qualificados e comprometidos 
              em entregar o melhor para cada cliente, com atendimento personalizado 
              e suporte constante em todas as etapas.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-opendata-yellow mr-2" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-primary">
              Conheça Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
