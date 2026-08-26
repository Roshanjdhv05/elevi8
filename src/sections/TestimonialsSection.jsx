import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

const displayTestimonials = testimonials.slice(0, 3);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-200 relative border-b border-gray-200 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          title="WHAT CLIENTS SAY"
          subtitle="Testimonials"
        />

        {/* Mobile Slider */}
        <div className="md:hidden overflow-hidden relative -mx-4 px-4 pb-8">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {displayTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-2">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 relative">
                  <Quote className="absolute top-8 right-8 text-navy/5 w-16 h-16 transform -rotate-12" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-8 relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {displayTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-brand-blue w-6" : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 relative group hover:border-gray-200 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-navy/5 w-16 h-16 transform -rotate-12 group-hover:text-brand-blue/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

