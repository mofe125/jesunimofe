import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";

const Portfolio = () => {
  // Fade-in animation on page load
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  // Portfolio categories
  const categories = [
    "All",
    "Cultural Heritage",
    "Everyday Life",
    "Portraits",
    "Resilience",
  ];

  // Updated portfolio items with new images
  const portfolioItems = [
    {
      id: 1,
      title: "Urban Landscapes",
      category: "Cultural Heritage",
      image: "/lovable-uploads/4a1ce754-93f8-4477-ac4f-663b7e5e8981.png",
      description: "Documenting the changing face of urban communities."
    },
    {
      id: 2,
      title: "Youth Perspectives",
      category: "Everyday Life",
      image: "/lovable-uploads/327a2550-159e-4df4-8616-0b23726a062e.png",
      description: "Capturing the spirit and resilience of young people."
    },
    {
      id: 3,
      title: "Market Life",
      category: "Cultural Heritage",
      image: "/lovable-uploads/f4591ecc-d0f2-48f6-bb81-e878977e91af.png",
      description: "The vibrant energy of local markets and commerce."
    },
    {
      id: 4,
      title: "Street Games",
      category: "Everyday Life",
      image: "/lovable-uploads/742dd573-d987-4eb6-9b28-7dd799f1908b.png",
      description: "Joy and community through street sports and games."
    },
    {
      id: 5,
      title: "Urban Transport",
      category: "Everyday Life",
      image: "/lovable-uploads/e6958971-b96f-453f-b122-0341d8dabc4c.png",
      description: "The pulse of city life through transportation."
    }
  ];

  return (
    <PageLayout>
      {/* Portfolio Hero Section */}
      <section className="relative py-20 md:py-32 bg-earthy">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              A collection of visual stories celebrating African culture, resilience, and everyday beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-load opacity-0">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-muted hover:bg-primary/10 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="image-grid-item group animate-on-load opacity-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square object-cover"
                />
                <div className="image-overlay group-hover:opacity-100">
                  <span className="text-sm uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-2xl mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
