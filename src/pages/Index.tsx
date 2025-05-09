
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import FloatingButtons from "@/components/ui/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;
