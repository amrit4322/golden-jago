import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold mb-2">
              PS Entertainment
            </h3>
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Jago with Preet Siyaan
            </p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium Indian wedding entertainment across Australia. Creating
              unforgettable celebrations through music, culture, and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Wedding DJ Services",
                "Dhol Performances",
                "Jago Night Entertainment",
                "Sangeet & Mehndi",
                "Professional MC/Host",
              ].map((service) => (
                <li
                  key={service}
                  className="text-primary-foreground/80 text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+61422542030"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+61 422 542 030</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@psentertainment.com.au"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>info@psentertainment.com.au</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-gold mt-1" />
                <span>Serving all major cities across Australia</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/jagowithpreetsiyaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} PS Entertainment. All rights reserved.</p>
            <p>
              Proudly serving{" "}
              <span className="text-gold">Indian Wedding Celebrations</span>{" "}
              across Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
