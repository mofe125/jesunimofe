
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreviewSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-load opacity-0">
            <img 
              src="/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png" 
              alt="Jesunimofe Henry-Adelegan" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="animate-on-load opacity-0">
            <h2 className="section-title">Jesunimofe: Creating Impact</h2>
            <p className="text-base text-muted-foreground mb-4">
              Jesunimofe Henry-Adelegan is a multifaceted individual with a passion for creating positive change through media, law, and philanthropy. As the founder of The Hand that Gives the Rose and a Spark Chapter Leader, she works tirelessly to support education and community development.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              With expertise in intellectual property law and skills in documentary photography, writing, and radio presenting, Jesunimofe is dedicated to capturing and sharing authentic African narratives while protecting creative rights and fostering positive social impact.
            </p>
            <Link to="/about" className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
              Learn more about my journey
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
