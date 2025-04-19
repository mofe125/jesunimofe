
import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

const About = () => {
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
      {/* About Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-earthy to-earthy-light">
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Documentary photographer, writer and multimedia storyteller with a focus on authentic African narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-load opacity-0">
              <img 
                src="/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png" 
                alt="Portrait" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="animate-on-load opacity-0">
              <h2 className="section-title">My Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a documentary photographer and multimedia storyteller passionate about capturing authentic African narratives. My journey began with a desire to challenge stereotypes and show the world the resilience, beauty, and complexity of everyday African life.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With every image I capture, I aim to evoke emotions of resilience, joy, and strength. My approach is centered on authenticity and respect, ensuring that each story is told with dignity and depth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I believe that every story deserves to be told and to be told well. This philosophy guides my work as I continue to document the rich tapestry of African experiences.
              </p>
              
              <div className="flex items-center">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors mr-6"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>@africanstoryteller</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-load opacity-0">
              <h3 className="font-heading text-2xl mb-4">My Mission</h3>
              <p className="text-muted-foreground mb-4">
                To capture and share authentic African stories that challenge stereotypes, celebrate resilience, and showcase the depth and diversity of the continent's narratives.
              </p>
              <p className="text-muted-foreground">
                Through my lens, I aim to create a visual bridge that connects viewers to the genuine experiences of African communities, fostering understanding and appreciation.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-load opacity-0">
              <h3 className="font-heading text-2xl mb-4">My Vision</h3>
              <p className="text-muted-foreground mb-4">
                A world where African narratives are told with dignity, authenticity, and depth, where stereotypes are replaced with nuanced understanding, and where every story has the power to inspire action and change.
              </p>
              <p className="text-muted-foreground">
                I envision my work contributing to a global perspective that values and respects the rich tapestry of African experiences and voices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-load opacity-0">
            <h2 className="section-title">My Values</h2>
            <p className="section-subtitle">
              The core principles that guide my approach to documentary photography and storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center animate-on-load opacity-0">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">01</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                I believe in capturing real moments and genuine emotions, avoiding staged or manipulated imagery that doesn't represent the truth.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="text-center animate-on-load opacity-0">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">02</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Dignity</h3>
              <p className="text-muted-foreground">
                Every subject deserves to be portrayed with respect and dignity, never exploiting vulnerability for visual impact.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="text-center animate-on-load opacity-0">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">03</span>
              </div>
              <h3 className="font-heading text-xl mb-3">Depth</h3>
              <p className="text-muted-foreground">
                I strive to go beyond surface-level imagery to reveal the complex layers of each story and the rich context behind every frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gradient-to-r from-earthy to-earthy-light text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-load opacity-0">
            <h2 className="section-title text-white mb-8">What Inspires Me</h2>
            <div className="space-y-6">
              <p className="text-xl">
                "I'm inspired by African culture, everyday people, and the need to challenge stereotypes. The resilience I witness in communities facing challenges, the joy that persists despite difficulties, and the rich cultural traditions that continue to thrive - these are what drive my work."
              </p>
              <p className="text-xl">
                "My goal is for people to feel connected, inspired, and informed when they see my work. I want viewers to recognize the shared humanity in every story while appreciating the unique perspectives and experiences that shape African narratives."
              </p>
              <p className="text-xl font-medium italic mt-8">
                "Every Story deserves to be told and to be told well."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-muted rounded-xl p-8 md:p-12 text-center animate-on-load opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              If you're interested in collaborating on a project or have a story that needs to be told, I'd love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
