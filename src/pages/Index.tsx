
import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import PillarsSection from "../components/PillarsSection";
import HeroSection from "../components/home/HeroSection";
import AboutPreviewSection from "../components/home/AboutPreviewSection";
import FeaturedWorkSection from "../components/home/FeaturedWorkSection";
import ServicesSection from "../components/home/ServicesSection";
import CallToActionSection from "../components/home/CallToActionSection";

const Index = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 200); // Stagger the animations
    });
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Pillars Section */}
      <PillarsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action */}
      <CallToActionSection />
    </PageLayout>
  );
};

export default Index;
