import { useEffect } from "react";
import { Instagram, Gift, GraduationCap, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

const About = () => {
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
            <p className="text-xl max-w-3xl mx-auto">
              Documentary photographer, legal professional, and humanitarian dedicated to creating positive change through media, law, and philanthropy.
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
                alt="Jesunimofe Henry-Adelegan" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="animate-on-load opacity-0">
              <h2 className="section-title">My Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I am Jesunimofe Henry-Adelegan, a multifaceted individual driven by the desire to create lasting positive change. As the founder of The Hand that Gives the Rose and a Spark Chapter Leader for Giving Tuesday, I work to promote education, generosity, and community development.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a law degree specializing in intellectual property, I am passionate about protecting creative rights while using my skills as a documentary photographer, writer, and radio presenter to tell authentic African stories.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through my various roles, I strive to redefine global perceptions of Africa by highlighting its beauty, resilience, and rich traditions.
              </p>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.instagram.com/thecreativelawyerr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>@thecreativelawyerr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-load opacity-0">
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-xl mb-4">Philanthropist</h3>
              <p className="text-muted-foreground">
                Founder of The Hand that Gives the Rose NGO and Spark Chapter Leader for Giving Tuesday, promoting education and community development.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-load opacity-0">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-xl mb-4">Legal Professional</h3>
              <p className="text-muted-foreground">
                Specialized in intellectual property law, protecting creative rights and supporting artists in their endeavors.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-load opacity-0">
              <Camera className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-xl mb-4">Storyteller</h3>
              <p className="text-muted-foreground">
                Documentary photographer, writer, and radio presenter dedicated to sharing authentic African narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-load opacity-0">
            <h2 className="section-title mb-8">My Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              "My mission is to create positive change through the intersection of media, law, and philanthropy. By capturing authentic African narratives, protecting creative rights, and fostering community development, I aim to contribute to a more nuanced understanding of our continent's rich heritage and potential."
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              "Through my work, I seek to amplify African voices, challenge stereotypes, and inspire others to join in creating meaningful impact in their communities."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center animate-on-load opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Let's Create Impact Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're interested in collaboration, supporting our initiatives, or sharing your story, I'd love to connect with you.
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
