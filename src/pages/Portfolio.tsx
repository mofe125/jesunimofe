
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

  // Portfolio gallery items
  const portfolioItems = [
    {
      id: 1,
      title: "Resilience in Joy",
      category: "Resilience",
      image: "/lovable-uploads/a1e7295f-0c89-4f28-b800-1763e26e7bc4.png",
      description: "A moment of pure joy captured amidst daily challenges."
    },
    {
      id: 2,
      title: "Cultural Pride",
      category: "Cultural Heritage",
      image: "/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png",
      description: "Traditional attire showcasing cultural identity."
    },
    {
      id: 3,
      title: "Quiet Strength",
      category: "Portraits",
      image: "/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png",
      description: "Portrait displaying inner strength and determination."
    },
    {
      id: 4,
      title: "Morning Rituals",
      category: "Everyday Life",
      image: "/lovable-uploads/a1e7295f-0c89-4f28-b800-1763e26e7bc4.png",
      description: "The beauty found in everyday morning routines."
    },
    {
      id: 5,
      title: "Market Day",
      category: "Everyday Life",
      image: "/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png",
      description: "The vibrant energy of a local market in full swing."
    },
    {
      id: 6,
      title: "Generational Wisdom",
      category: "Cultural Heritage",
      image: "/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png",
      description: "Knowledge passed down through generations."
    },
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
