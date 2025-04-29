
import React, { useState, useEffect } from "react";
import { WhatsApp, Phone, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show buttons after page load with a slight delay
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const buttons = [
    {
      icon: <WhatsApp size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/551199999999",
      color: "bg-green-500",
    },
    {
      icon: <Phone size={20} />,
      label: "Ligar",
      href: "tel:+551199999999",
      color: "bg-opendata-blue",
    },
  ];

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 flex flex-col items-end space-y-3 z-50 transition-opacity duration-500",
        showButtons ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Action buttons (conditionally shown) */}
      <div
        className={cn(
          "flex flex-col items-end space-y-3 transition-all duration-300",
          isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none transform translate-y-10"
        )}
      >
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-105",
              button.color
            )}
          >
            {button.icon}
            <span className="ml-2">{button.label}</span>
          </a>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={toggleExpand}
        className={cn(
          "bg-opendata-yellow text-opendata-blue p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105",
          isExpanded && "rotate-45"
        )}
        aria-label="Ajuda"
      >
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;
