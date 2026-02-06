import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicePartnership = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transition from Cyan (previous section) to White/Lavender to Purple
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["#FFFFFF", "#6D5CFF"],
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 font-grotesk overflow-hidden"
    >
      <div className="container-custom mx-auto space-y-32">
        {/* Section 1: Long Haul */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase leading-tight text-black"
          >
            We are with you for <br />
            the long haul
          </motion.h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-black/80 font-light leading-relaxed"
            >
              As you scale, launch your products, and go into new markets, we
              continue to support your business and get people excited all over
              again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-5xl md:text-7xl font-bold text-[#6D5CFF] mb-2">
                2.3 YEARS
              </h3>
              <p className="text-black/70 font-medium">
                Industry average length of client – onenex relationship
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Launch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase leading-tight text-black"
          >
            We know what it takes <br />
            to launch
          </motion.h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-black/80 font-light leading-relaxed space-y-4"
            >
              <p>We have launched hundreds of products across categories.</p>
              <p>We have seen it all, done it all.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#6D5CFF] mb-2">
                  30
                </h3>
                <p className="text-black/70 font-medium">Industries Sector</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#6D5CFF] mb-2">
                  150+
                </h3>
                <p className="text-black/70 font-medium">Product Launch</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 3: Extension of team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto pt-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium uppercase leading-tight text-white mb-12">
            We're an extension of your team. One goal, one team and one big
            product.
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-6xl md:text-8xl font-bold text-[#0FFFFF] mb-4">
              70+
            </h3>
            <p className="text-white/90 text-xl font-medium uppercase tracking-widest">
              Team Members
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicePartnership;
