import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="font-heading text-2xl font-bold inline-block">
              African<span className="text-primary">Storyteller</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Documentary photographer and multimedia storyteller focused on authentic African narratives.
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

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:contact@africanstoryteller.com" className="hover:text-primary transition-colors">
                  contact@africanstoryteller.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <a href="tel:+2348081345228" className="hover:text-primary transition-colors">
                  +234 808 134 5228
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
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} African Storyteller. All rights reserved.
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
