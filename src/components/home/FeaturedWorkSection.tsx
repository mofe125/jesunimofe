
import { Link } from "react-router-dom";

const FeaturedWorkSection = () => {
  return (
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
  );
};

export default FeaturedWorkSection;
