import { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

const ServiceTransition = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const controlsLine1 = useAnimationControls();
  const controlsLine2 = useAnimationControls();

  const line1 = ["We", "don't", "just", "build", "websites"];
  const line2 = [
    "We",
    "help",
    "build",
    "digital",
    "products",
    "functional",
    "and",
    "impactful",
  ];

  const subText =
    "Our job is to make it more human. To build digital products, that help businesses do better, be better and show up in a way that makes our consumers' lives better.";

  useEffect(() => {
    if (!inView) return;

    const run = async () => {
      await controlsLine1.start((i) => ({
        opacity: 1,
        color: "#00E3FE",
        transition: { duration: 0.45, delay: i * 0.12 },
      }));

      await controlsLine2.start((i) => ({
        opacity: 1,
        color: "#00E3FE",
        transition: { duration: 0.45, delay: i * 0.12 },
      }));
    };

    run();
  }, [inView, controlsLine1, controlsLine2]);

  return (
    <section
      ref={ref}
      className="container-custom  relative min-h-[100vh] flex items-center justify-center font-grotesk"
    >
      <div className="grid grid-cols-2 items-end">
        <div>
          <h2 className="text-secondary text-xl font-bold tracking-widest mb-8 uppercase">
            What Do We Do?
          </h2>

          <div className="flex flex-wrap gap-x-2 text-4xl md:text-5xl font-medium leading-tight mb-6">
            {line1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial={{
                  opacity: 0.25,
                  color: "rgba(255,255,255,0.35)",
                }}
                animate={controlsLine1}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-2 text-4xl md:text-5xl font-medium leading-tight">
            {line2.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial={{
                  opacity: 0.25,
                  color: "rgba(255,255,255,0.35)",
                }}
                animate={controlsLine2}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div className="text-white text-lg md:text-xl leading-relaxed ">
          {subText}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTransition;
