
import { Link } from "react-router-dom";
import { Camera, MessageSquare, User, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-load opacity-0">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Specialized documentary photography and storytelling services for clients who value authentic African narratives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <Camera size={32} className="text-primary mb-3" />
            <h3 className="font-heading text-xl mb-2">Documentary Projects</h3>
            <p className="text-muted-foreground text-sm mb-4">
              In-depth visual storytelling projects for publications, NGOs, and cultural institutions focused on African narratives.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center">
              Learn more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Service 2 */}
          <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <MessageSquare size={32} className="text-primary mb-3" />
            <h3 className="font-heading text-xl mb-2">Editorial Photography</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Visual content for magazines, newspapers, and online publications seeking authentic African perspectives.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center">
              Learn more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Service 3 */}
          <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <User size={32} className="text-primary mb-3" />
            <h3 className="font-heading text-xl mb-2">Brand Storytelling</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Visual narratives for brands and organizations that want to connect with audiences through authentic storytelling.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center">
              Learn more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
