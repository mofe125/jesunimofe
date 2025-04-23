import { useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    "Everyday Life",
    "Education",
    "Nature & Ritual"
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
    },
    {
      id: 13,
      title: "Ornate Chandelier",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/138a14d2-f3a8-452a-a8fa-a3bf516b2e95.png",
      description: "Crystal chandelier in sacred space"
    },
    {
      id: 14,
      title: "Altar Cross",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/b9cdcfc8-c9ab-4b4e-aa99-24f75c686071.png",
      description: "Golden cross on altar with green cloth"
    },
    {
      id: 15,
      title: "Sacred Lamp",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/ecf84bf3-bcdb-4ba9-8924-40d022305a7f.png",
      description: "Traditional green church lamp"
    },
    {
      id: 16,
      title: "Joy in Worship",
      category: "Faith & Spirituality",
      image: "/lovable-uploads/199082f2-e303-4534-816d-4f6c9dc6bc71.png",
      description: "Candid moment of joyful worship"
    },
    {
      id: 17,
      title: "Cultural Offerings",
      category: "Cultural Heritage",
      image: "/lovable-uploads/512ce24c-dbe2-4236-a3c4-2a8c1fb8c1c2.png",
      description: "Traditional kola nuts and offerings"
    },
    {
      id: 18,
      title: "Heritage Celebration",
      category: "Cultural Heritage",
      image: "/lovable-uploads/4611a5a7-4ef8-4ee8-8d5c-313a2e7978eb.png",
      description: "Women in traditional attire and gele"
    },
    {
      id: 19,
      title: "Sacred Ritual",
      category: "Nature & Ritual",
      image: "/lovable-uploads/4d7bb6b8-6910-4c6a-9f83-bbe02ee3160a.png",
      description: "Traditional ritual by the water"
    },
    {
      id: 20,
      title: "Traditional Craft",
      category: "Cultural Heritage",
      image: "/lovable-uploads/6f98d3f7-4011-4444-a945-6516461de472.png",
      description: "Artisan working with traditional vessel"
    },
    {
      id: 21,
      title: "Beaded Heritage",
      category: "Cultural Heritage",
      image: "/lovable-uploads/7fea0b34-71d9-4af1-8091-70c0a82d8566.png",
      description: "Intricate beadwork on traditional item"
    },
    {
      id: 22,
      title: "Young Muslim Students",
      category: "Education",
      image: "/lovable-uploads/df025272-fb5b-4c51-9817-d99faeab3fc9.png",
      description: "Students in their school uniforms"
    },
    {
      id: 23,
      title: "Student Portrait",
      category: "Education",
      image: "/lovable-uploads/69147823-6a57-4252-8489-25fed1fca075.png",
      description: "Portrait of students in traditional dress"
    },
    {
      id: 24,
      title: "Traditional Hairstyle",
      category: "Cultural Heritage",
      image: "/lovable-uploads/a5864e2e-f580-455e-b1bd-35ac4f4a1c1a.png",
      description: "Intricate traditional braiding with cowrie shells"
    },
    {
      id: 25,
      title: "Waterfall Ritual",
      category: "Nature & Ritual",
      image: "/lovable-uploads/d6c4c0bd-5d1e-4f2e-a51d-f8314d4139e7.png",
      description: "Sacred cleansing ritual at the waterfall"
    },
    {
      id: 26,
      title: "Sacred Waters",
      category: "Nature & Ritual",
      image: "/lovable-uploads/7ee0e37c-c7f6-4c0e-b7cf-0fd01be8fe11.png",
      description: "Traditional water ritual in progress"
    },
    {
      id: 27,
      title: "Nature's Blessing",
      category: "Nature & Ritual",
      image: "/lovable-uploads/79da7f5c-fb26-4f85-92eb-ceec6495ef37.png",
      description: "Participants in waterfall ritual"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === selectedCategory 
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
            {filteredItems.map((item) => (
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
