
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
