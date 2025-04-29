
import React from "react";
import PricingCard from "../ui/PricingCard";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Básico",
      price: "R$49,90",
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
      price: "R$89,90",
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
      price: "R$149,90",
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
