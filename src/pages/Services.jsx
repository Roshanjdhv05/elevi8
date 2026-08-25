import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import CTASection from "../sections/CTASection";
import Button from "../components/Button";
import { services } from "../data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const { hash } = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Sticky scroll logic — maps scroll position to active service index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollableDistance = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const index = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to specific service if hash is present
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const idx = services.findIndex((s) => s.id === id);
      if (idx !== -1 && containerRef.current) {
        const containerTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollableDistance = containerHeight - windowHeight;
        const targetScroll =
          containerTop + (idx / services.length) * scrollableDistance;
        setTimeout(() => {
          window.scrollTo({ top: targetScroll, behavior: "smooth" });
        }, 500);
      }
    }
  }, [hash]);

  const service = services[activeIndex];
  const Icon = service.icon;

  return (
    <PageTransition>
      <SEO
        title="Services"
        description="We build professional websites, web applications, and digital solutions designed to move your business forward."
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            SOLUTIONS THAT MOVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-glow to-brand-blue">
              YOUR BUSINESS FORWARD.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From high-converting websites to complex web applications, we provide the end-to-end digital services you need to scale.
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Container — height = number of services × 100vh */}
      <div
        ref={containerRef}
        style={{ height: `${services.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen bg-gray-50 overflow-hidden flex flex-col">

          {/* Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-20">
            <motion.div
              className="h-full bg-brand-blue"
              animate={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Service Counter (top right) */}
          <div className="absolute top-6 right-8 z-20">
            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dot Navigation (left side) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {services.map((s, i) => (
              <button
                key={s.id}
                title={s.title}
                onClick={() => {
                  if (!containerRef.current) return;
                  const containerTop =
                    containerRef.current.getBoundingClientRect().top + window.scrollY;
                  const containerHeight = containerRef.current.offsetHeight;
                  const windowHeight = window.innerHeight;
                  const scrollableDistance = containerHeight - windowHeight;
                  const targetScroll =
                    containerTop + (i / services.length) * scrollableDistance;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}
                className={`w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "h-8 bg-brand-blue"
                    : "h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={s.title}
              />
            ))}
          </div>

          {/* Animated Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex-1 flex items-center"
            >
              <div className="container mx-auto px-16 max-w-7xl">
                <div
                  className={`flex flex-col ${
                    activeIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-24 items-center`}
                >
                  {/* Left: Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon size={32} style={{ color: service.color }} />
                      </div>
                      <span className="text-6xl font-black text-navy/5 select-none">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 4).map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <CheckCircle2
                                size={16}
                                className="flex-shrink-0 mt-0.5"
                                style={{ color: service.color }}
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
                          Process
                        </h3>
                        <ul className="space-y-2">
                          {service.process.slice(0, 4).map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <span
                                className="font-bold opacity-40"
                                style={{ color: service.color }}
                              >
                                {i + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button to="/contact" variant="primary">
                      Discuss Your Project <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>

                  {/* Right: Visual Panel */}
                  <div className="flex-1 w-full">
                    <div
                      className="rounded-3xl p-8 md:p-12 border relative overflow-hidden"
                      style={{
                        backgroundColor: `${service.color}08`,
                        borderColor: `${service.color}30`,
                      }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium shadow-sm text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div
                        className="w-full h-40 rounded-2xl flex items-center justify-center border"
                        style={{
                          backgroundColor: `${service.color}10`,
                          borderColor: `${service.color}20`,
                        }}
                      >
                        <Icon size={72} style={{ color: service.color, opacity: 0.3 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Scroll hint — only on first service */}
          {activeIndex === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 pointer-events-none"
            >
              <span className="text-xs font-bold tracking-widest uppercase">
                Scroll to explore services
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1"
              >
                <div className="w-1 h-2 bg-gray-400 rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <CTASection />
    </PageTransition>
  );
}
