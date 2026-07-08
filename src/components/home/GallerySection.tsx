import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "../../data/portfolioData";

const GallerySection = () => {
  // Pick a curated selection for the homepage gallery
  const galleryItems = portfolioItems.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-10 animate-on-load opacity-0">
          <h2 className="section-title">Gallery</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the stories, people, and places captured through my lens.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 animate-on-load opacity-0">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-on-load opacity-0">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View the full portfolio
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
