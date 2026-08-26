import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/services";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayServices = services.slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayServices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [displayServices.length]);

  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <SectionHeading 
            title="WHAT WE DO" 
            subtitle="Our Services" 
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className=""
          >
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </motion.div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden overflow-hidden relative -mx-4 px-4 pb-8">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {displayServices.map((service, index) => (
              <div key={service.id} className="min-w-full px-2">
                <Link to={`/services#${service.id}`} className="block h-full">
                  <ServiceCard service={service} index={index} />
                </Link>
              </div>
            ))}
          </motion.div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {displayServices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-brand-blue w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <Link key={service.id} to={`/services#${service.id}`} className="block h-full">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
