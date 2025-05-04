
import { Link } from "react-router-dom";
import { Camera, MessageSquare, User, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Specialized documentary photography and storytelling services for clients who value authentic African narratives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <Camera size={36} className="text-primary mb-4" />
            <h3 className="font-heading text-2xl mb-3">Documentary Projects</h3>
            <p className="text-muted-foreground mb-4">
              In-depth visual storytelling projects for publications, NGOs, and cultural institutions focused on African narratives.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center">
              Learn more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Service 2 */}
          <div className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <MessageSquare size={36} className="text-primary mb-4" />
            <h3 className="font-heading text-2xl mb-3">Editorial Photography</h3>
            <p className="text-muted-foreground mb-4">
              Visual content for magazines, newspapers, and online publications seeking authentic African perspectives.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center">
              Learn more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Service 3 */}
          <div className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md animate-on-load opacity-0">
            <User size={36} className="text-primary mb-4" />
            <h3 className="font-heading text-2xl mb-3">Brand Storytelling</h3>
            <p className="text-muted-foreground mb-4">
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
