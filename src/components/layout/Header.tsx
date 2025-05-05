
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Detect which section is currently in view
      const sections = ["home", "about", "services", "pricing", "contact"];
      let currentSection = activeSection;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, activeSection]);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = activeSection === href.replace('#', '');
    
    return (
      <li>
        <a 
          href={href} 
          className={cn(
            "relative text-gray-700 hover:text-opendata-blue font-medium transition-colors duration-300 py-2 px-1",
            isActive && "text-opendata-blue"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          {children}
          {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-opendata-blue animate-scale-in" />
          )}
        </a>
      </li>
    );
  };

  const SocialIcon = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-opendata-gray-dark hover:text-opendata-blue transition-colors duration-300"
    >
      <Icon size={20} />
    </a>
  );

  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white dark:bg-opendata-blue shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-opendata-blue dark:text-white font-bold text-2xl">
            Opendata<span className="text-opendata-yellow">Systems</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#pricing">Planos</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            <SocialIcon Icon={Facebook} href="https://www.facebook.com/share/1DHHEZVmus/?mibextid=wwXIfr" />
            <SocialIcon Icon={Instagram} href="https://www.instagram.com/opendatasystems.mz?igsh=MWNlODQ0cm9wejExdQ==" />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-opendata-blue dark:text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-opendata-blue transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b dark:border-gray-700">
            <span className="text-opendata-blue dark:text-white font-bold text-xl">
              Opendata<span className="text-opendata-yellow">Systems</span>
            </span>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-opendata-blue dark:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow p-5">
            <ul className="space-y-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">Sobre Nós</NavLink>
              <NavLink href="#services">Serviços</NavLink>
              <NavLink href="#pricing">Planos</NavLink>
              <NavLink href="#contact">Contato</NavLink>
            </ul>
          </nav>
          <div className="p-5 border-t dark:border-gray-700">
            <div className="flex justify-center space-x-6 mb-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/share/1DHHEZVmus/?mibextid=wwXIfr" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/opendatasystems.mz?igsh=MWNlODQ0cm9wejExdQ==" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
