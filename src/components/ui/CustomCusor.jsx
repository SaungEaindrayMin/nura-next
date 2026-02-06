import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 7);
      cursorY.set(e.clientY - 7);
    };

    window.addEventListener("mousemove", moveCursor);

    const addListeners = () => {
      const textGlowElements = document.querySelectorAll(
        '[data-cursor="text-glow"]',
      );
      const viewElements = document.querySelectorAll('[data-cursor="view"]');

      textGlowElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("text-glow"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });

      viewElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("view"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };

    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "#2563EB",
      borderRadius: "9999px",
      x: 8,
      y: 8,
      mixBlendMode: "normal",
    },

    "text-glow": {
      height: 250,
      width: 250,
      backgroundColor: "#C0FF00",
      filter: "blur(60px)",
      x: -60,
      y: -60,
      mixBlendMode: "multiply",
    },
    view: {
      height: 80,
      width: 80,
      backgroundColor: "#3B82F6",
      opacity: 1,
      x: -25,
      y: -25,
      mixBlendMode: "normal",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-medium text-white text-sm"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {cursorVariant === "view" && (
        <span className="text-white font-bold tracking-wider text-xs">
          VIEW
        </span>
      )}

      {cursorVariant === "default" && (
        <div className="absolute flex items-center justify-center w-full h-full">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#ffffff",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: 4,
                height: 4,
                backgroundColor: "#2563EB",
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
