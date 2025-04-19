
import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";

const NGO = () => {
  // Fade-in animation on page load
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  const ngoProjects = [
    {
      title: "Community Development",
      description: "Working with local communities to document and support grassroots initiatives.",
      image: "/lovable-uploads/4a1ce754-93f8-4477-ac4f-663b7e5e8981.png",
    },
    {
      title: "Youth Empowerment",
      description: "Capturing stories of youth resilience and creativity in urban spaces.",
      image: "/lovable-uploads/327a2550-159e-4df4-8616-0b23726a062e.png",
    },
    {
      title: "Cultural Preservation",
      description: "Documenting traditional practices and cultural heritage for future generations.",
      image: "/lovable-uploads/f4591ecc-d0f2-48f6-bb81-e878977e91af.png",
    }
  ];

  return (
    <PageLayout>
      {/* NGO Hero Section */}
      <section className="relative py-20 md:py-32 bg-earthy">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              NGO Documentation
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Visual storytelling for social impact organizations working to create positive change in African communities.
            </p>
          </div>
        </div>
      </section>

      {/* NGO Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ngoProjects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg animate-on-load opacity-0"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-2xl mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NGO;
