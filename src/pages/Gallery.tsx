import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import heroImage from "@/assets/hero-wedding.jpg";
import dholImage from "@/assets/dhol-performance.jpg";
import bridalImage from "@/assets/bridal-entry.jpg";
import sangeetImage from "@/assets/sangeet-night.jpg";
import jagoImage from "@/assets/jago-night.jpg";
import mehndiImage from "@/assets/mehndi-ceremony.jpg";
import weddingDjImage from "@/assets/wedding-dj.jpg";
import groomImage from "@/assets/groom-entry.jpg";
import hinduImage from "@/assets/hindu-wedding.jpg";

type Category = "all" | "weddings" | "sangeet" | "jago" | "dhol" | "bridal";

const galleryImages = [
  { src: heroImage, category: "weddings", alt: "Grand Indian wedding celebration" },
  { src: dholImage, category: "dhol", alt: "Dhol performance at wedding" },
  { src: bridalImage, category: "bridal", alt: "Beautiful bridal entry" },
  { src: sangeetImage, category: "sangeet", alt: "Sangeet night dancing" },
  { src: jagoImage, category: "jago", alt: "Traditional Jago night celebration" },
  { src: mehndiImage, category: "sangeet", alt: "Mehndi ceremony celebration" },
  { src: weddingDjImage, category: "weddings", alt: "Professional DJ setup" },
  { src: groomImage, category: "bridal", alt: "Groom grand entry on horse" },
  { src: hinduImage, category: "weddings", alt: "Hindu wedding ceremony" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "weddings", label: "Weddings" },
  { value: "sangeet", label: "Sangeet Nights" },
  { value: "jago", label: "Jago Nights" },
  { value: "dhol", label: "Dhol Performances" },
  { value: "bridal", label: "Bridal Entries" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                Our Work
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Gallery
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto mb-6" />
              <p className="text-primary-foreground/80 text-lg">
                Browse through moments from the beautiful weddings we've been
                honored to be part of.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "bg-muted text-muted-foreground hover:bg-gold/20 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-card"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
