
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flag } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-opendata-blue overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Flag className="text-opendata-yellow mr-2" size={24} />
              <span className="text-opendata-yellow font-semibold">Moçambique</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Soluções Digitais para o{" "}
              <span className="text-opendata-yellow">Crescimento</span> do seu Negócio
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 md:pr-8">
              Hospedagem de sites, domínios personalizados, e-mails profissionais e muito mais.
              Transforme sua presença digital com a OpendataSystems.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-opendata-yellow hover:bg-opacity-90 text-opendata-blue font-semibold">
                Quero um Orçamento
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-opendata-blue font-semibold transition-all duration-300">
                Nossos Serviços
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-semibold text-gray-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-opendata-yellow">+500</span> clientes satisfeitos
              </div>
            </div>
          </div>
          
          <div className="relative animate-float hidden lg:block">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-opendata-yellow opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-opendata-blue opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 rounded-md bg-opendata-blue mb-4 flex items-center justify-center">
                <div className="text-white font-bold text-5xl">OS</div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                <div className="h-8 bg-opendata-yellow rounded w-1/2 mx-auto"></div>
              </div>
              
              <div className="absolute -right-8 top-1/3 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Site Online</span>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-opendata-yellow rounded-full"></div>
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
