import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We start by deeply understanding your business, industry, and target audience to ensure our solutions align with your goals."
  },
  {
    num: "02",
    title: "STRATEGIZE",
    desc: "We define the right digital direction, map out the user journey, and create a comprehensive technical architecture."
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Our design team crafts modern, intuitive user experiences that reflect your brand and engage your customers."
  },
  {
    num: "04",
    title: "DEVELOP",
    desc: "We build scalable, high-performance solutions using modern technologies and best-in-class development practices."
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "We rigorously test, deploy, and optimize your digital product, providing ongoing support to ensure long-term success."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white relative border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="HOW WE BUILD" 
          subtitle="Our Process" 
          alignment="center" 
        />
        <div className="relative mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting Line Base (Desktop) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 h-0.5 bg-gray-200 -z-10" style={{ width: "calc(100% + 1.5rem)" }} />
                )}
                
                {/* Animated Connecting Line (Desktop) */}
                {index !== steps.length - 1 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "calc(100% + 1.5rem)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.5 + 0.4, duration: 0.4, ease: "linear" }}
                    className="hidden lg:block absolute top-12 left-1/2 h-0.5 bg-brand-blue -z-10 origin-left" 
                  />
                )}
                
                {/* Number Circle */}
                <motion.div 
                  initial={{ borderColor: "#e5e7eb", backgroundColor: "#ffffff" }}
                  whileInView={{ borderColor: "#2563eb", backgroundColor: "#eff6ff" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.5, duration: 0.4 }}
                  className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-8 relative transition-all shadow-sm bg-white"
                >
                  <motion.span 
                    initial={{ color: "#9ca3af" }}
                    whileInView={{ color: "#2563eb" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.5, duration: 0.4 }}
                    className="text-2xl font-black transition-colors"
                  >
                    {step.num}
                  </motion.span>
                  
                  {/* Connecting Line Base (Mobile) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-200 -z-10" />
                  )}
                  
                  {/* Animated Connecting Line (Mobile) */}
                  {index !== steps.length - 1 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "3rem" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.5 + 0.3, duration: 0.2 }}
                      className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 bg-brand-blue -z-10" 
                    />
                  )}
                </motion.div>
                
                <h3 className="text-xl font-bold tracking-wider mb-4 group-hover:text-brand-blue-glow transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
