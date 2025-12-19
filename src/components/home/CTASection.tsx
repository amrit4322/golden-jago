import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-3">
            Ready to Celebrate?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Make Your Wedding{" "}
            <span className="text-gradient-gold">Unforgettable</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            From the first beat of the Dhol to the last dance of the night, we're
            here to create magical moments for you and your loved ones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+61000000000">
              <Button variant="maroon" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
            <a
              href="https://wa.me/61000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
