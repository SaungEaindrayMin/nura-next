import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceTextReveal = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = [
    "Every",
    "small",
    "details",
    "matter",
    "to",
    "us.",
    "Your",
    "colors,",
    "Typefaces?",
    "How",
    "does",
    "your",
    "customer",
    "service",
    "handle",
    "complaints?",
    "All",
    "of",
    "the",
    "above",
    "and",
    "More?",
  ];

  const subWords = [
    "This",
    "is",
    "where",
    "we",
    "start.",
    "Your",
    "digital",
    "product",
    "big",
    "or",
    "small",
    "should",
    "be",
    "unique",
    "and",
    "should",
    "tell",
    "the",
    "right",
    "stories",
    "and",
    "solve",
    "the",
    "right",
    "problems",
    "to",
    "create",
    "the",
    "right",
    "connections.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center py-24 font-grotesk"
    >
      {/* Gradient overlay REMOVED */}

      <div
        className="container-custom grid grid-cols-1 gap-y-24 items-start relative z-20"
      >
        {/* 🟢 LEFT COLUMN — PRIMARY TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
          className="flex flex-wrap justify-start gap-x-3 gap-y-2 text-3xl md:text-4xl font-medium leading-tight text-accent-blue"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.2 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* 🔵 RIGHT COLUMN — SECONDARY TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.5 }} // Optional delay to start after or with first block
          className="flex flex-wrap justify-end gap-x-3 gap-y-2 text-2xl md:text-4xl font-medium leading-relaxed text-right"
        >
          {subWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.2 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.4 }}
              className="text-primary inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTextReveal;
