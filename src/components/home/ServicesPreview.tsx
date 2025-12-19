import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import weddingDjImage from "@/assets/wedding-dj.jpg";
import dholImage from "@/assets/dhol-performance.jpg";
import jagoImage from "@/assets/jago-night.jpg";
import sangeetImage from "@/assets/sangeet-night.jpg";
import bridalImage from "@/assets/bridal-entry.jpg";
import mcImage from "@/assets/wedding-mc.jpg";

const services = [
  {
    title: "Wedding DJ Services",
    description: "Bollywood, Punjabi, Bhangra & Western music to keep your guests dancing all night.",
    image: weddingDjImage,
    href: "/services#dj",
  },
  {
    title: "Dhol Performances",
    description: "Traditional Dhol rhythms that bring energy and excitement to every celebration.",
    image: dholImage,
    href: "/services#dhol",
  },
  {
    title: "Jago Night Entertainment",
    description: "Authentic Jago celebrations with traditional performances and music.",
    image: jagoImage,
    href: "/services#jago",
  },
  {
    title: "Sangeet & Mehndi",
    description: "Perfect entertainment for your pre-wedding celebrations.",
    image: sangeetImage,
    href: "/services#sangeet",
  },
  {
    title: "Bridal & Groom Entry",
    description: "Grand, memorable entrances that set the tone for your special day.",
    image: bridalImage,
    href: "/services#entry",
  },
  {
    title: "Professional MC/Host",
    description: "Experienced hosts who seamlessly guide your event from start to finish.",
    image: mcImage,
    href: "/services#mc",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From high-energy DJ performances to traditional Dhol beats, we bring
            every element of Indian celebration to your wedding.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-secondary font-medium text-sm hover:text-gold-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative gold accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="maroon" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
