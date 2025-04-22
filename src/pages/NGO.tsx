
import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const NGO = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  return (
    <PageLayout>
      {/* NGO Hero Section */}
      <section className="relative py-20 md:py-32 bg-earthy">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10 flex flex-col items-center justify-center">
          <img
            src="/lovable-uploads/4ba7b98a-7d34-49c5-80be-5813dc7235ef.png"
            alt="NGO Logo"
            className="h-40 w-40 object-contain mx-auto mb-7 drop-shadow-xl"
          />
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              The Hand that Gives the Rose
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A non-profit organization dedicated to improving the lives of underprivileged children through education, feeding, and enlightenment.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-on-load opacity-0">
              <h2 className="section-title text-center mb-8" style={{ color: '#8D5B4C' }}>About Us</h2>
              <p className="text-lg leading-relaxed text-earthy">
                The Hand that Gives the Rose is passionate about meeting the physical needs of street and underprivileged children. We work tirelessly to rehabilitate, educate, and restore hope to street children, addressing their spiritual, mental, and emotional needs. Our goal is to provide a holistic approach to care, ensuring that each child receives the support they need to thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-load opacity-0">
              <div className="bg-white p-8 rounded-lg shadow-md border border-earthy/30">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-earthy">Education</h3>
                <p>Supporting holistic education for underprivileged children, combining academic knowledge with practical skills.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-earthy/30">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-earthy">Basic Needs</h3>
                <p>Providing essential resources including pipe-borne water and food banks to support children's physical wellbeing.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-earthy/30">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-earthy">Spiritual Growth</h3>
                <p>Nurturing spiritual and moral development to help children become responsible, contributing members of society.</p>
              </div>
            </div>
            <div className="text-center pt-8 animate-on-load opacity-0">
              <a 
                href="https://thtgtrng.wixsite.com/thtgtr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-earthy hover:bg-earthy-dark text-white"
                >
                  Learn More About Our Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NGO;
