import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-gray-100/50 border border-gray-200 hover:border-brand-blue/30 hover:bg-gray-100 transition-all duration-300"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${service.color}, transparent 60%)` }}
      />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: `${service.color}15` }}
        >
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />
          <Icon size={28} style={{ color: service.color }} className="relative z-10" />
        </div>
        <span className="text-4xl font-black text-navy/5 tracking-tighter select-none transition-colors duration-500 group-hover:text-navy/10">
          {service.number}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors text-brand-blue">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 h-20">
        {service.shortDescription}
      </p>

      {/* Action */}
      <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors" style={{ color: service.color }}>
        <span className="relative overflow-hidden flex items-center group-hover:gap-3 transition-all duration-300">
          Explore Service
          <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </span>
      </div>
    </motion.div>
  );
}
