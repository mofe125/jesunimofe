
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image - updated to 4:3 aspect ratio with object-contain */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
        <img 
          src="/lovable-uploads/c42dd4d9-5853-4de7-98db-e706af610cdb.png" 
          alt="Jesunimofe Henry-Adelegan" 
          className="w-full h-full object-contain aspect-[4/3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-on-load opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Every Story Deserves <br />To Be Told Well
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Documentary photographer and multimedia storyteller capturing authentic African narratives with dignity and emotion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn-secondary text-white border-white">
              Work With Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
