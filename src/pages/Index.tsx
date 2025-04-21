
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, MessageSquare, User } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import PillarsSection from "../components/PillarsSection";

const Index = () => {
  // Fade-in animation on page load
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 200); // Stagger the animations
    });
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png" 
            alt="Jesunimofe Henry-Adelegan" 
            className="w-full h-full object-cover"
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

      {/* About Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-load opacity-0">
              <img 
                src="/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png" 
                alt="Jesunimofe Henry-Adelegan" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-on-load opacity-0">
              <h2 className="section-title">Jesunimofe: The Great Oak</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Jesunimofe is a dynamic and multifaceted individual who embodies the spirit of innovation, creativity, and social responsibility. She is a talented documentary photographer, writer and multimedia storyteller using her art to amplify marginalized voices and address pressing social issues.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through her diverse endeavors, such as her non-profit organisation that supports underprivileged children, Jesunimofe continues to inspire positive change and creativity, leaving a lasting impact on her community and beyond. She also promotes literacy for children with her organisation, Smart Kids Creative.
              </p>
              <Link to="/about" className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                Learn more about my journey
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              A selection of stories captured through my lens, showcasing the beauty, resilience, and complexity of African narratives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Work Item 1 */}
            <div className="image-grid-item group animate-on-load opacity-0">
              <img 
                src="/lovable-uploads/18841c83-e3a6-4b1a-9955-02077ea22b9f.png" 
                alt="Cultural Portrait" 
                className="aspect-[4/5] object-cover"
              />
              <div className="image-overlay group-hover:opacity-100">
                <h3 className="font-heading text-2xl mb-2">Cultural Heritage</h3>
                <p>Documenting the essence of African traditions and daily life.</p>
              </div>
            </div>
            
            {/* Featured Work Item 2 */}
            <div className="image-grid-item group animate-on-load opacity-0">
              <img 
                src="/lovable-uploads/954dfa28-6a16-4b3f-abb1-7ba621196c92.png" 
                alt="Religious Artifacts" 
                className="aspect-[4/5] object-cover"
              />
              <div className="image-overlay group-hover:opacity-100">
                <h3 className="font-heading text-2xl mb-2">Sacred Art</h3>
                <p>Exploring the intersection of faith, art, and culture.</p>
              </div>
            </div>
            
            {/* Featured Work Item 3 */}
            <div className="image-grid-item group animate-on-load opacity-0">
              <img 
                src="/lovable-uploads/077207ad-330a-4a0b-827f-885ebcdd465e.png" 
                alt="Cultural Performance" 
                className="aspect-[4/5] object-cover"
              />
              <div className="image-overlay group-hover:opacity-100">
                <h3 className="font-heading text-2xl mb-2">Living Culture</h3>
                <p>Capturing the vibrancy of African cultural expressions.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-load opacity-0">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <PillarsSection />

      {/* Services Section */}
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

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-muted rounded-xl p-8 md:p-12 text-center animate-on-load opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Let's Tell Your Story Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're a publication, NGO, or brand looking to share authentic African narratives, I'm here to help bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;

