import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for smooth cursor follow
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    
    if (isTouchDevice) return;

    // Add class to body to hide default cursor
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Global event delegation for hover effects
    const handleMouseOver = (e) => {
      // Portfolio card hover
      const portfolioCard = e.target.closest('[data-cursor="view"]');
      if (portfolioCard) {
        setIsHovering(true);
        setCursorText("VIEW");
        return;
      }

      // Link/Button hover
      const interactiveElement = e.target.closest('a, button, [role="button"], input, textarea, select');
      if (interactiveElement) {
        setIsHovering(true);
        setCursorText("");
        return;
      }

      // Default state
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-brand-blue rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-[8px] font-bold tracking-wider text-navy whitespace-nowrap overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? (cursorText ? 64 : 48) : 16,
          height: isHovering ? (cursorText ? 64 : 48) : 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-navy mix-blend-normal z-10 pointer-events-none"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Trailing Ring (Optional, uncomment if desired) */}
      {/* <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-blue/30 rounded-full pointer-events-none z-[9998]"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.8 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      /> */}
    </>
  );
}

// Ensure AnimatePresence is imported
import { AnimatePresence } from "framer-motion";
