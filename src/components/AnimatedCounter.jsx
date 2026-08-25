import { motion, useInView, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  label, 
  duration = 2 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 1,
    duration: duration * 1000
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  // Format the number in React instead of using motion templates to avoid issues
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl md:text-5xl font-black text-brand-blue-glow tracking-tighter">
          {displayValue}
        </span>
        <span className="text-3xl font-bold text-brand-blue">
          {suffix}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

// Need useState
import { useState } from "react";
