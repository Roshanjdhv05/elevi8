import { motion } from "framer-motion";

export default function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "left",
  light = false
}) {
  const alignClass = alignment === "center" ? "items-center text-center" : "items-start text-left";
  
  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center gap-4 mb-4"
        >
          {alignment === "center" && <div className="h-px w-8 bg-brand-blue" />}
          <span className="text-sm font-bold tracking-[0.2em] text-brand-blue uppercase">
            {subtitle}
          </span>
          <div className="h-px w-8 bg-brand-blue" />
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-black tracking-tight ${light ? 'text-navy' : ''}`}
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
