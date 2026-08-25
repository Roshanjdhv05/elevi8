import { motion } from "framer-motion";
import Button from "../components/Button";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-200 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-navy">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Let's build something great together. We're ready to turn your idea into a powerful digital experience.
            </p>
            
            <Button to="/contact" variant="primary" className="h-16 px-10 text-lg rounded-full">
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
