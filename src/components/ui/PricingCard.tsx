
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg border p-6",
        isPopular 
          ? "border-opendata-yellow relative z-10 scale-105 shadow-xl" 
          : "border-gray-100",
        className
      )}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-opendata-yellow text-opendata-blue text-sm font-bold py-1 px-3 rounded-full">
          Mais Popular
        </span>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-opendata-blue">{title}</h3>
        <div className="mt-4 mb-3">
          <span className="text-4xl font-bold text-opendata-blue">{price}</span>
          <span className="text-gray-500 ml-1">{period}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="border-t border-gray-100 my-6"></div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check 
              size={18} 
              className={cn(
                "mr-2 mt-0.5", 
                isPopular ? "text-opendata-yellow" : "text-opendata-blue"
              )} 
            />
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full",
          isPopular 
            ? "bg-opendata-yellow hover:bg-opacity-90 text-opendata-blue" 
            : "bg-opendata-blue hover:bg-opacity-90 text-white"
        )}
      >
        Contratar Agora
      </Button>
    </div>
  );
};

export default PricingCard;
