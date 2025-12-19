import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gurpreet & Navjot Singh",
    location: "Melbourne",
    rating: 5,
    text: "The DJ and Dhol performance made our wedding unforgettable. The energy was unreal! Everyone is still talking about how amazing the entertainment was. Preet and his team went above and beyond.",
  },
  {
    id: 2,
    name: "Ravi & Anita Sharma",
    location: "Sydney",
    rating: 5,
    text: "Professional, organised, and culturally perfect. Highly recommended! They understood exactly what we wanted for our Hindu ceremony and made it absolutely magical.",
  },
  {
    id: 3,
    name: "Harjeet & Simran Kaur",
    location: "Brisbane",
    rating: 5,
    text: "Our Jago night was the highlight of our wedding week. PS Entertainment brought authentic Punjabi vibes that had everyone dancing until the early hours. Simply the best!",
  },
  {
    id: 4,
    name: "Vikram & Pooja Patel",
    location: "Perth",
    rating: 5,
    text: "From the Sangeet to the reception, they handled everything flawlessly. The MC kept the energy high throughout and the transitions were seamless. Couldn't have asked for more.",
  },
  {
    id: 5,
    name: "Manpreet & Jasleen Gill",
    location: "Adelaide",
    rating: 5,
    text: "The bridal entry they planned for us was breathtaking. The Dhol players created such an emotional and powerful moment. Every detail was perfect. Thank you PS Entertainment!",
  },
  {
    id: 6,
    name: "Amit & Priya Khanna",
    location: "Gold Coast",
    rating: 5,
    text: "We hired PS Entertainment for our Sikh wedding and they exceeded all expectations. They respected our traditions while making it a celebration everyone enjoyed. Truly talented team!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-gold/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-gold/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gold/30 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
            Client Love
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-gold/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 md:px-12"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-heading text-xl font-semibold text-primary-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gold">{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 -left-4 md:left-0 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 -right-4 md:right-0 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gold"
                    : "bg-gold/30 hover:bg-gold/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
