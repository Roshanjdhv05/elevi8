import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ 
  children, 
  to, 
  href,
  variant = "primary", 
  className = "", 
  onClick,
  type = "button",
  icon = false
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-brand-blue hover:bg-brand-blue-light text-navy glow-blue-hover",
    secondary: "bg-white/10 hover:bg-white/20 text-navy backdrop-blur-sm border border-gray-200",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-navy glow-blue-hover",
    ghost: "text-gray-700 hover:text-navy hover:bg-white/5",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      type={type} 
      className={`group ${combinedClasses}`} 
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
