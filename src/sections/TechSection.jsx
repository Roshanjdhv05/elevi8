import { motion } from "framer-motion";

const technologies = [
  "React", "JavaScript", "TypeScript", "Node.js", 
  "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", 
  "WordPress", "Next.js", "Vite", "REST APIs"
];

export default function TechSection() {
  const row1 = technologies.filter((_, i) => i % 2 === 0);
  const row2 = technologies.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-12 bg-gray-200 overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            BUILT WITH MODERN TECHNOLOGY.
          </h2>
          <p className="text-gray-600">
            We use the right tools for the job to ensure performance, scalability, and maintainability.
          </p>
        </motion.div>
      </div>
      
      {/* Infinite Marquees */}
      <div className="relative flex flex-col gap-6 overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6 px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Row 1 - Moves Left */}
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <div 
              key={`r1-${i}`}
              className="px-8 py-4 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-700">{tech}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap gap-6 px-3 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Row 2 - Moves Right */}
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <div 
              key={`r2-${i}`}
              className="px-8 py-4 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-700">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
