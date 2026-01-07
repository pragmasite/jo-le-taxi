import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, alt: "Service professionnel" },
    { id: 2, alt: "Confort et sécurité" },
    { id: 3, alt: "Disponible 24/7" },
    { id: 4, alt: "Transport fiable" },
    { id: 5, alt: "Courtoisie garantie" },
    { id: 6, alt: "Service de qualité" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        {/* Image Grid - Show small previews with slider */}
        <div className="space-y-8">
          {/* Main image with carousel controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-medium bg-background h-96 md:h-[500px]"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚕</div>
                <p className="text-xl font-serif text-primary">{images[currentIndex].alt}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 p-3 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 p-3 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Slide indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {images.map((image, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  i === currentIndex ? "border-primary" : "border-border"
                } hover:scale-110`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl">
                  🚕
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
