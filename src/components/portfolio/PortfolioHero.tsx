
import React from "react";

const PortfolioHero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-earthy">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="text-center text-white animate-on-load opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A visual journey through portraits, culture, faith, and social justice
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
