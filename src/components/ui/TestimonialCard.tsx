
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  content,
  rating,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md border border-gray-100", 
        className
      )}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-opendata-yellow fill-current" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-opendata-blue text-white flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-opendata-blue">{name}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
