import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceTextReveal = () => {
  const containerRef = useRef(null);

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
      className="relative  flex items-center font-grotesk mb-24"
    >
      <div className="container-custom grid grid-cols-1 gap-y-52 items-start relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
          className="flex flex-wrap justify-start gap-x-3 gap-y-2 text-3xl md:text-5xl font-medium  leading-tight text-[#00CFE7]"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.2 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
          className="flex flex-wrap justify-end gap-x-3 gap-y-2 text-2xl md:text-5xl font-medium  leading-relaxed text-right"
        >
          {subWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.2 },
                visible: { opacity: 1 },
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
