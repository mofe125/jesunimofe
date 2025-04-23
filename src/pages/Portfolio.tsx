
import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";

const Portfolio = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  const categories = [
    "All",
    "Portraits",
    "Cultural Heritage",
    "Social Justice",
    "Faith & Spirituality",
    "Everyday Life"
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Studio Portrait in Red",
      category: "Portraits",
      image: "/lovable-uploads/ba64c877-e7b2-4d96-8528-86b9a18f0362.png",
      description: "Portrait study with red headwrap"
    },
    {
      id: 2,
      title: "Reflection",
      category: "Portraits",
      image: "/lovable-uploads/b7ec5b5c-1962-477e-8d59-5338a6811b15.png",
      description: "Mirror portrait study"
    },
    {
      id: 3,
      title: "Evening Worker",
      category: "Everyday Life",
      image: "/lovable-uploads/8b8ff91b-7b17-4fd7-881c-23ca3a36e772.png",
      description: "Portrait of a worker at dusk"
    },
    {
      id: 4,
      title: "Daily Rituals",
      category: "Everyday Life",
      image: "/lovable-uploads/b64bfc32-50cd-4b16-9582-8e97c9152b60.png",
      description: "Candid moment of daily life"
    },
    {
      id: 5,
      title: "Stand for Palestine",
      category: "Social Justice",
      image: "/lovable-uploads/bb1b37c2-3197-497a-93c7-beed024bdef5.png",
      description: "Protest signage for peace"
    },
    {
      id: 6,
      title: "Wise Elder",
      category: "Portraits",
      image: "/lovable-uploads/5197a2c5-261e-4c74-b2c7-6a36d4dcbdd0.png",
      description: "Portrait of an elder in green"
    },
    {
      id: 7,
      title: "Natural Beauty",
      category: "Portraits",
      image: "/lovable-uploads/3db0ca88-46f0-4edd-a07c-d9bbf0ef3580.png",
      description: "Close-up portrait study"
    },
    {
      id: 8,
      title: "Community Voice",
      category: "Social Justice",
      image: "/lovable-uploads/bf1595aa-8ad3-4a8f-b80e-0b4d954d37eb.png",
      description: "Peaceful demonstration"
    },
    {
      id: 9,
      title: "Church Notices",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/dd1aff00-e2bb-4cc3-8d84-b4fcd9815df6.png",
      description: "Church bulletin board"
    },
    {
      id: 10,
      title: "Divine Light",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/6632639a-df8c-4399-8d31-a452826abc70.png",
      description: "Religious statue in church"
    },
    {
      id: 11,
      title: "Sacred Space",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/ec3796c6-02c7-43c8-92da-dc44cb9ec440.png",
      description: "Church altar with lighting"
    },
    {
      id: 12,
      title: "Cultural Dance",
      category: "Cultural Heritage",
      image: "/lovable-uploads/aa7cc254-a36a-4828-a0b0-b5c180476306.png",
      description: "Traditional performance with ceremonial dress"
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
              A visual journey through portraits, culture, faith, and social justice
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
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg aspect-square animate-on-load opacity-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-sm uppercase tracking-wider mb-1 text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
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
