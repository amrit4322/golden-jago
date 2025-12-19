import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "10+ Years",
    description: "of Experience",
  },
  {
    icon: MapPin,
    title: "Australia Wide",
    description: "Weddings Across Australia",
  },
  {
    icon: Heart,
    title: "Cultural Expertise",
    description: "Punjabi • Sikh • Hindu Traditions",
  },
  {
    icon: Users,
    title: "Full Service",
    description: "Professional Event Coordination",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full bg-gradient-to-br from-gold-light to-gold shadow-gold group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
