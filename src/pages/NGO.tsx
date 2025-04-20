
import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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

  return (
    <PageLayout>
      {/* NGO Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-red-600 to-red-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
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
              <h2 className="section-title text-center mb-8">About Us</h2>
              <p className="text-lg leading-relaxed">
                The Hand that Gives the Rose is passionate about meeting the physical needs of street and underprivileged children. We work tirelessly to rehabilitate, educate, and restore hope to street children, addressing their spiritual, mental, and emotional needs. Our goal is to provide a holistic approach to care, ensuring that each child receives the support they need to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-load opacity-0">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold mb-4">Education</h3>
                <p>Supporting holistic education for underprivileged children, combining academic knowledge with practical skills.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold mb-4">Basic Needs</h3>
                <p>Providing essential resources including pipe-borne water and food banks to support children's physical wellbeing.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold mb-4">Spiritual Growth</h3>
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
                  className="bg-red-600 hover:bg-red-700 text-white"
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
