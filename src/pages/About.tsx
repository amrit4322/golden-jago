import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Star } from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import mcImage from "@/assets/wedding-mc.jpg";

const AboutPage = () => {
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
                Our Story
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About PS Entertainment
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={mcImage}
                    alt="Preet Siyaan - Founder of PS Entertainment"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -z-10 w-full h-full rounded-2xl bg-gold/20 top-4 -right-4" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bringing Joy to Every <span className="text-gradient-gold">Celebration</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <p>
                    PS Entertainment provides premium Indian wedding entertainment
                    across Australia, specialising in Punjabi, Sikh, and Hindu
                    celebrations. Led by Preet Siyaan, our team delivers
                    unforgettable wedding moments through music, live performances,
                    cultural rituals, and professional hosting.
                  </p>
                  <p>
                    From high-energy dance floors to emotional bridal entries, we
                    blend tradition with modern entertainment to create seamless and
                    memorable wedding experiences for couples and families.
                  </p>
                  <p>
                    With over a decade of experience, we understand the importance
                    of cultural authenticity while delivering contemporary
                    entertainment that resonates with all generations. Every wedding
                    we serve becomes a celebration that families remember forever.
                  </p>
                </div>

                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Work With Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Award, number: "10+", label: "Years Experience" },
                { icon: Users, number: "500+", label: "Weddings Served" },
                { icon: Heart, number: "100%", label: "Client Satisfaction" },
                { icon: Star, number: "5.0", label: "Average Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <p className="font-heading text-4xl font-bold text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cultural Authenticity",
                  description:
                    "We honor and preserve the rich traditions of Punjabi, Sikh, and Hindu wedding customs while adding a modern touch.",
                },
                {
                  title: "Professionalism",
                  description:
                    "From first contact to the last dance, we maintain the highest standards of service, reliability, and excellence.",
                },
                {
                  title: "Creating Memories",
                  description:
                    "Every wedding is unique, and we're committed to creating moments that families will cherish for generations.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-xl shadow-card text-center"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-96 shadow-elegant"
            >
              <img
                src={heroImage}
                alt="PS Entertainment at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center p-10">
                <p className="font-heading text-3xl md:text-4xl text-primary-foreground text-center font-bold">
                  Creating Unforgettable Wedding Moments
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
