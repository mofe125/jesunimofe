import { useEffect } from "react";
import { Mail, Phone, Instagram, MessageSquare } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

const Contact = () => {
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
      {/* Contact Hero Section */}
      <section className="relative py-20 md:py-28 bg-clay">
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Let's discuss your project and how we can collaborate to tell authentic and impactful stories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-load opacity-0">
              <h2 className="font-heading text-3xl font-semibold mb-6">Send a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below with details about your project or inquiry, and I'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Tell me about your project or inquiry"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-muted rounded-lg p-8 mb-8 animate-on-load opacity-0">
                <h2 className="font-heading text-3xl font-semibold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I'm available for documentary projects, editorial work, and brand storytelling collaborations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contact@africanstoryteller.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@africanstoryteller.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+2348081345228" className="text-muted-foreground hover:text-primary transition-colors">
                        +234 808 134 5228
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Instagram className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Instagram</h3>
                      <a 
                        href="https://www.instagram.com/thecreativelawyerr?igsh=MnNtYzd0MDhpZDFo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @thecreativelawyerr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-muted rounded-lg p-8 animate-on-load opacity-0">
                <h2 className="font-heading text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <MessageSquare size={18} className="text-primary mr-2" />
                      What types of projects do you take on?
                    </h3>
                    <p className="text-muted-foreground">
                      I focus on documentary photography, editorial assignments, and brand storytelling projects that align with my mission of sharing authentic African narratives.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <MessageSquare size={18} className="text-primary mr-2" />
                      Do you travel for projects?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, I'm available for projects across Africa and internationally, depending on the scope and timeline.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <MessageSquare size={18} className="text-primary mr-2" />
                      How do we start working together?
                    </h3>
                    <p className="text-muted-foreground">
                      The process begins with a consultation to understand your vision and needs, followed by a proposal outlining the approach, timeline, and investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
