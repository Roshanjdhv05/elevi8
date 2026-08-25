import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loading screen on initial mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo animation */}
          <div className="relative mb-8 overflow-hidden">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              ELEVI<span className="text-brand-blue">8</span>
            </motion.div>
          </div>

          {/* Loading bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
