
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  className
}) => {
  return (
    <div className={cn("service-card group", className)}>
      <div className="h-14 w-14 rounded-lg bg-opendata-yellow bg-opacity-10 flex items-center justify-center mb-6 text-opendata-yellow group-hover:bg-opendata-blue group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-opendata-blue mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Button variant="link" className="p-0 text-opendata-blue font-medium flex items-center hover:text-opendata-yellow transition-colors">
        Saiba Mais <ArrowRight className="ml-1" size={16} />
      </Button>
    </div>
  );
};

export default ServiceCard;
