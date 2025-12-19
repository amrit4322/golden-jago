import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Wedding Reception",
  "Sangeet Night",
  "Mehndi Function",
  "Jago Night",
  "Engagement",
  "Birthday Party",
  "Corporate Event",
  "Other",
];

const cities = [
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Gold Coast",
  "Canberra",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      city: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Get in Touch
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto mb-6" />
              <p className="text-primary-foreground/80 text-lg">
                Let's Make Your Wedding Unforgettable
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Send Us an Enquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with a personalized quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+61 XXX XXX XXX"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, eventType: value }))
                        }
                      >
                        <SelectTrigger className="bg-card">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, city: value }))
                        }
                      >
                        <SelectTrigger className="bg-card">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, requirements, and any questions you have..."
                      rows={5}
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>

                <div className="space-y-6 mb-10">
                  <a
                    href="tel:+61000000000"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+61 000 000 000</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@psentertainment.com.au"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        info@psentertainment.com.au
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/61000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">Click to chat</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Serving all major cities across Australia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center text-primary hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center text-primary hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-10 p-6 bg-muted rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
