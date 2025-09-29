import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="SABIR GLASS Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 font-body mb-4">
              All type of glass work in one place. Serving Gulbarga/Kalaburagi with quality craftsmanship since 1989.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span className="font-body text-sm">Professional Glass Solutions Since 1989</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+919900673744" 
                  className="font-body text-primary-foreground/80 hover:text-primary-foreground"
                >
                  +91 9900673744
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:sabirglasses@gmail.com" 
                  className="font-body text-primary-foreground/80 hover:text-primary-foreground"
                >
                  sabirglasses@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <address className="font-body text-primary-foreground/80 not-italic">
                  National chowk, Noor Bagh,<br />
                  Kalaburagi, Karnataka 585104
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
              >
                Contact
              </Link>
              <Link 
                to="/map" 
                className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
              >
                Map
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-primary-foreground/60 text-sm">
            © {currentYear} SABIR GLASS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;