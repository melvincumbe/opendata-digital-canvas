
import React from "react";
import PricingCard from "../ui/PricingCard";
import { Flag } from "lucide-react";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Básico",
      price: "3.000 MT",
      period: "/mês",
      description: "Ideal para pequenos negócios e profissionais liberais.",
      features: [
        "1 Site Hospedado",
        "10GB de Espaço",
        "1 Domínio Grátis",
        "5 Contas de Email",
        "Certificado SSL Básico",
        "Suporte por Email"
      ],
      isPopular: false
    },
    {
      title: "Premium",
      price: "5.500 MT",
      period: "/mês",
      description: "Para empresas em crescimento que precisam de mais recursos.",
      features: [
        "5 Sites Hospedados",
        "50GB de Espaço",
        "1 Domínio Grátis",
        "20 Contas de Email",
        "Certificado SSL Premium",
        "Suporte Prioritário 24/7",
        "Backup Diário",
        "CDN Integrado"
      ],
      isPopular: true
    },
    {
      title: "Empresarial",
      price: "9.000 MT",
      period: "/mês",
      description: "Solução completa para empresas estabelecidas.",
      features: [
        "Sites Ilimitados",
        "100GB de Espaço",
        "2 Domínios Grátis",
        "Email Ilimitado",
        "Certificado SSL Premium",
        "Suporte Prioritário 24/7",
        "Backup Diário",
        "CDN Integrado",
        "IP Dedicado",
        "Ambiente Otimizado"
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
          <div className="flex items-center space-x-2 bg-green-50 py-2 px-4 rounded-full border border-green-200">
            <Flag size={18} className="text-red-600" />
            <span className="text-sm font-medium">Preços em Metical Moçambicano (MT)</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-16 justify-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex-1 max-w-sm mx-auto md:mx-0">
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

        <div className="text-center mt-12">
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
