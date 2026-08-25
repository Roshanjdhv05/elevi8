import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import siteConfig from "../config/site.config";

export default function TrustSection() {
  return (
    <section className="py-24 bg-gray-200 border-y border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 mb-16">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              DIGITAL SOLUTIONS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-glow to-brand-blue">
                BUILT FOR REAL BUSINESSES.
              </span>
            </motion.h2>
          </div>
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-blue pl-6"
            >
              We partner with ambitious companies across industries to design, develop, and launch powerful digital experiences that drive growth, efficiency, and brand value.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-gray-200 p-2 shadow-xl"
            >
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
