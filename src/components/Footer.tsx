import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import { toast } from "sonner";
import { subscribeToNewsletter } from "@/utils/mailchimp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    try {
      await subscribeToNewsletter(email);
      toast.success("Successfully subscribed!", {
        description: "You'll now receive our newsletter and updates.",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Subscription failed", {
        description: error instanceof Error ? error.message : "Please try again later",
      });
    }
  };

  return (
    <footer className="bg-muted py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="font-heading text-2xl font-bold inline-block">
              Jesunimofe<span className="text-primary">Henry-Adelegan</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Documentary photographer and multimedia storyteller focused on amplifying marginalized voices and addressing pressing social issues.
            </p>
            <p className="font-heading text-lg italic">
              "Every Story deserves to be told and to be told well."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="font-heading text-xl mb-4">Get In Touch</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:jhenryadelegan@gmail.com" className="hover:text-primary transition-colors">
                  jhenryadelegan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Instagram size={18} className="text-primary" />
                <a 
                  href="https://www.instagram.com/thecreativelawyerr?igsh=MnNtYzd0MDhpZDFo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @thecreativelawyerr
                </a>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-6 bg-primary rounded-lg p-5 shadow-lg">
              <h3 className="font-heading text-xl text-white mb-3">Subscribe to Newsletter</h3>
              <p className="text-white/90 text-sm mb-4">
                Stay updated with our latest stories, photography tips, and upcoming exhibitions.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/70 border-0 focus:ring-2 focus:ring-white/30"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-white text-primary font-medium px-4 py-2 rounded-md hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Jesunimofe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/thecreativelawyerr?igsh=MnNtYzd0MDhpZDFo"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
