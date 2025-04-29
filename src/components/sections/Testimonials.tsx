
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechBrasil",
      content: "A OpendataSystems transformou completamente a presença online da nossa empresa. O site agora carrega muito mais rápido e a segurança aumentou significativamente.",
      rating: 5
    },
    {
      name: "Amanda Oliveira",
      position: "Diretora de Marketing",
      company: "Grupo Inovação",
      content: "O suporte técnico é excepcional. Sempre que tivemos algum problema, eles resolveram rapidamente. Recomendo muito os serviços da OpendataSystems.",
      rating: 5
    },
    {
      name: "Marcelo Costa",
      position: "Proprietário",
      company: "Costa Imóveis",
      content: "Nosso e-commerce teve um aumento de 40% nas vendas após migrarmos para a hospedagem da OpendataSystems. A velocidade e estabilidade fazem toda diferença.",
      rating: 4
    },
    {
      name: "Patricia Mendes",
      position: "Gerente",
      company: "Studio Design",
      content: "Os e-mails profissionais elevaram o nível de credibilidade da nossa empresa. A equipe da OpendataSystems foi muito atenciosa na implementação.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-opendata-blue">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle">
          Conheça a experiência de quem já transformou sua presença digital com
          os serviços da OpendataSystems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              className="hover-scale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
