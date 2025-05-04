
import React from "react";
import PricingCard from "../ui/PricingCard";
import { Flag } from "lucide-react";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Pacote Simples",
      price: "280 MT",
      period: "/mês",
      description: "Ideal para pequenos negócios e profissionais liberais.",
      features: [
        "1 Domínio",
        "10GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "5 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: false
    },
    {
      title: "Pacote 2",
      price: "560 MT",
      period: "/mês",
      description: "Para empresas em crescimento que precisam de mais recursos.",
      features: [
        "3 Domínios",
        "25GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "20 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: true
    },
    {
      title: "Pacote 3",
      price: "780 MT",
      period: "/mês",
      description: "Solução completa para empresas estabelecidas.",
      features: [
        "5 Domínios",
        "50GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "50 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-opendata-blue">Planos e Preços</h2>
        <p className="section-subtitle">
          Escolha o plano ideal para o seu negócio e comece a expandir sua
          presença digital hoje mesmo.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-green-50 py-2 px-4 rounded-full border border-green-200 animate-fade-in">
            <Flag size={18} className="text-red-600" />
            <span className="text-sm font-medium">Preços em Metical Moçambicano (MT)</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-16 justify-center">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="flex-1 max-w-sm mx-auto md:mx-0 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-gray-600 mb-2">
            Precisando de uma solução personalizada?
          </p>
          <a
            href="#contact"
            className="text-opendata-blue font-semibold hover:text-opendata-yellow transition-colors"
          >
            Entre em contato para um plano sob medida
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
