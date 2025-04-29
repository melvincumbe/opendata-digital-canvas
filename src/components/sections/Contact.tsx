
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    });
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Telefone",
      value: "(11) 9999-9999",
      action: "Ligue para nós",
      link: "tel:+551199999999",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "contato@opendatasystems.com.br",
      action: "Envie um email",
      link: "mailto:contato@opendatasystems.com.br",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Chat",
      value: "Suporte via chat",
      action: "Iniciar chat",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-opendata-blue">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para ajudar você a transformar sua presença digital.
          Entre em contato conosco hoje mesmo.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nome Completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="hosting">Hospedagem de Sites</option>
                    <option value="domain">Domínios Personalizados</option>
                    <option value="email">E-mails Profissionais</option>
                    <option value="ssl">Certificados SSL</option>
                    <option value="technical">Serviços Técnicos</option>
                    <option value="development">Desenvolvimento Web</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Assunto*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                  placeholder="Assunto da sua mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opendata-blue"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="btn-primary">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-opendata-blue mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex">
                  <div className="h-12 w-12 rounded-full bg-opendata-blue bg-opacity-10 flex items-center justify-center text-opendata-blue shrink-0">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-opendata-blue">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{method.value}</p>
                    <a
                      href={method.link}
                      className="text-sm text-opendata-blue hover:text-opendata-yellow transition-colors"
                    >
                      {method.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-opendata-blue mb-4">
                Horário de Atendimento
              </h4>
              <p className="text-gray-600 mb-1">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-600">Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
