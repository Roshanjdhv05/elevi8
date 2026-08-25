import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "../components/Button";

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-200 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-gray-700">Modern Digital Solutions Agency</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            WE BUILD DIGITAL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue-glow to-brand-blue"
          >
            EXPERIENCES THAT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ELEV8 YOUR BUSINESS
          </motion.div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Websites, web applications, digital experiences and business solutions designed to help ambitious brands grow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Button to="/contact" variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg">
            Start a Project <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button to="/work" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg">
            Explore Our Work
          </Button>
        </motion.div>


      </div>

      {/* Abstract Floating UI Elements (Desktop Only) — behind text via z-[1] */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none perspective-1000 z-[1]">
        <motion.div
          animate={{ y: [-10, 10, -10], rotateY: [-5, 5, -5], rotateX: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[10%] w-80 h-52 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-2xl p-4 transform -rotate-12"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
            <div className="h-2 w-1/2 bg-white/10 rounded-full" />
            <div className="h-2 w-5/6 bg-white/10 rounded-full" />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10], rotateY: [5, -5, 5], rotateX: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-10 w-56 h-64 bg-gray-100/80 backdrop-blur-md rounded-2xl border border-brand-blue/30 shadow-[0_0_50px_rgba(37,99,235,0.2)] p-4 transform rotate-12 flex flex-col justify-between"
        >
          <div className="w-full h-32 bg-brand-blue/20 rounded-xl mb-4" />
          <div className="h-8 w-full bg-brand-blue rounded-lg mt-auto flex items-center justify-center text-xs font-bold tracking-widest uppercase">
            Live Preview
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-navy transition-colors z-20"
        onClick={scrollToNext}
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
