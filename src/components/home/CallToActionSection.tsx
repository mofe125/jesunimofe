
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        <div className="bg-muted rounded-xl p-6 md:p-10 text-center animate-on-load opacity-0">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-3">
            Let's Tell Your Story Together
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
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
