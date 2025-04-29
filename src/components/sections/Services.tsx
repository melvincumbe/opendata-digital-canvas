
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { Globe, Server, Mail, Shield, Cpu, FileCode } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Hospedagem de Sites",
      description: "Hospedagem de alta performance com servidores no Brasil, garantindo velocidade e estabilidade para seu site.",
      icon: <Server size={28} />
    },
    {
      title: "Domínios Personalizados",
      description: "Registre seu domínio exclusivo e fortaleça a identidade da sua marca na internet com nossos serviços.",
      icon: <Globe size={28} />
    },
    {
      title: "E-mails Profissionais",
      description: "Crie e-mails com o nome do seu domínio e transmita mais credibilidade na comunicação com seus clientes.",
      icon: <Mail size={28} />
    },
    {
      title: "Certificados SSL",
      description: "Proteja os dados dos seus visitantes e melhore seu ranqueamento no Google com certificados SSL.",
      icon: <Shield size={28} />
    },
    {
      title: "Serviços Técnicos",
      description: "Suporte técnico especializado para resolver problemas e otimizar o desempenho do seu site.",
      icon: <Cpu size={28} />
    },
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites, landing pages e lojas virtuais com design moderno e responsivo.",
      icon: <FileCode size={28} />
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-opendata-blue">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos soluções completas para sua presença digital, desde hospedagem até
          desenvolvimento de sistemas personalizados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="hover-scale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
