import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Mic, Users, Heart, Sparkles, Crown } from "lucide-react";

import weddingDjImage from "@/assets/wedding-dj.jpg";
import dholImage from "@/assets/dhol-performance.jpg";
import jagoImage from "@/assets/jago-night.jpg";
import sangeetImage from "@/assets/sangeet-night.jpg";
import bridalImage from "@/assets/bridal-entry.jpg";
import mcImage from "@/assets/wedding-mc.jpg";
import mehndiImage from "@/assets/mehndi-ceremony.jpg";
import turbanImage from "@/assets/turban-tying.jpg";
import hinduImage from "@/assets/hindu-wedding.jpg";

const services = [
  {
    id: "dj",
    icon: Music,
    title: "Wedding DJ Services",
    subtitle: "Bollywood, Punjabi, Bhangra & Western",
    description:
      "Our professional DJs bring the perfect mix of traditional and contemporary music to keep your guests entertained all night. From classic Bollywood hits to the latest Punjabi bangers and smooth Western tracks, we read the crowd and deliver non-stop energy.",
    features: [
      "Professional-grade sound equipment",
      "LED lighting & effects",
      "Custom playlist curation",
      "Seamless genre transitions",
    ],
    image: weddingDjImage,
  },
  {
    id: "dhol",
    icon: Sparkles,
    title: "Dhol Services",
    subtitle: "Solo & Group Performances",
    description:
      "Nothing beats the electrifying beats of traditional Dhol drums. Our skilled Dhol players bring authentic Punjabi energy to your baraat, milni, and reception, creating unforgettable moments that get everyone dancing.",
    features: [
      "Professional Dhol players",
      "Traditional attire & presentation",
      "Perfect for baraat & milni",
      "Customizable performance duration",
    ],
    image: dholImage,
  },
  {
    id: "jago",
    icon: Heart,
    title: "Live Jago Night Entertainment",
    subtitle: "Traditional Celebrations",
    description:
      "Experience authentic Jago night celebrations with traditional songs, dances, and rituals. We bring the complete Jago experience with decorated kalash, candles, and cultural performances that honor your heritage.",
    features: [
      "Traditional Jago setup",
      "Decorated kalash & candles",
      "Live folk singing",
      "Cultural dance performances",
    ],
    image: jagoImage,
  },
  {
    id: "sangeet",
    icon: Music,
    title: "Sangeet & Mehndi Functions",
    subtitle: "Pre-Wedding Celebrations",
    description:
      "Make your Sangeet and Mehndi nights memorable with perfect entertainment. We provide the ideal ambiance with music, coordination for family performances, and professional hosting to keep the celebrations flowing smoothly.",
    features: [
      "Perfect music selection",
      "Performance coordination",
      "Professional hosting",
      "Interactive games & activities",
    ],
    image: sangeetImage,
  },
  {
    id: "mc",
    icon: Mic,
    title: "Professional Wedding Host / MC",
    subtitle: "Expert Event Management",
    description:
      "Our experienced MCs ensure your wedding runs flawlessly from start to finish. With deep understanding of Indian wedding traditions and excellent crowd management skills, we keep your guests engaged and your event on schedule.",
    features: [
      "Fluent in Punjabi, Hindi & English",
      "Cultural ceremony expertise",
      "Crowd engagement specialist",
      "Seamless event coordination",
    ],
    image: mcImage,
  },
  {
    id: "entry",
    icon: Crown,
    title: "Bridal & Groom Entry Planning",
    subtitle: "Grand Entrances",
    description:
      "Create show-stopping moments with our professionally planned bridal and groom entries. From traditional phulkari canopies to dramatic sparkler walkways, we design entrances that leave lasting impressions.",
    features: [
      "Custom entry concepts",
      "Sparklers & special effects",
      "Coordinated music & timing",
      "Photography-ready moments",
    ],
    image: bridalImage,
  },
  {
    id: "family",
    icon: Users,
    title: "Family & Group Performances",
    subtitle: "Choreography Support",
    description:
      "We help coordinate and enhance family dance performances for your Sangeet. From song selection to performance order, we ensure every family member gets their moment to shine.",
    features: [
      "Performance coordination",
      "Music editing & mixing",
      "Stage management",
      "Sound & lighting support",
    ],
    image: mehndiImage,
  },
  {
    id: "hindu",
    icon: Heart,
    title: "Hindu Wedding Ritual Support",
    subtitle: "Traditional Ceremony Assistance",
    description:
      "We provide comprehensive support for Hindu wedding ceremonies, ensuring traditional rituals are conducted smoothly with proper music, announcements, and coordination with the pandit.",
    features: [
      "Ceremony music curation",
      "Ritual announcements",
      "Pandit coordination",
      "Traditional ambiance setup",
    ],
    image: hinduImage,
  },
  {
    id: "turban",
    icon: Crown,
    title: "Traditional Turban Tying",
    subtitle: "Safa / Pagri Services",
    description:
      "Complete your groom's look with expertly tied traditional turbans. Our skilled turban specialists create beautiful safas and pagris in various styles to match your wedding theme.",
    features: [
      "Multiple turban styles",
      "Color matching with attire",
      "Quick & professional service",
      "Traditional & modern designs",
    ],
    image: turbanImage,
  },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-overlay" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                What We Offer
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Our Services
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto mb-6" />
              <p className="text-primary-foreground/80 text-lg">
                From traditional Dhol beats to modern DJ sets, we provide
                complete entertainment solutions for Indian weddings across
                Australia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute -z-10 w-full h-full rounded-2xl bg-gold/20 top-4 ${
                        index % 2 === 1 ? "-left-4" : "-right-4"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button variant="gold" size="lg">
                        Enquire Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need a Custom Package?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every wedding is unique. Contact us to create a customized
                entertainment package that perfectly fits your celebration.
              </p>
              <Link to="/contact">
                <Button variant="maroon" size="xl">
                  Get a Custom Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
