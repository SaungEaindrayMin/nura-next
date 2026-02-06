import { motion } from "framer-motion";

const Hero = () => {
  const marqueeItems = Array(20).fill(null);

  return (
    <div className="min-h-screen font-sans py-20">
      <section className="pt-32">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-normal text-text-muted text-left mb-16 leading-tight tracking-wide"
            data-cursor="text-glow"
          >
            We are in the business of building
            <br />
            capabilities for our clients,
          </motion.h1>
        </div>

        <div className="w-screen overflow-hidden relative my-12 py-8">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -2400] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            data-cursor="text-glow"
          >
            {marqueeItems.map((_, index) => (
              <div key={index} className="inline-flex items-center gap-8 pr-8">
                <span className="text-5xl md:text-7xl lg:text-8xl font-semibold text-primary uppercase">
                  CASE
                </span>

                <span
                  className="text-5xl md:text-7xl lg:text-8xl font-semibold uppercase"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #4F46E5",
                  }}
                >
                  STUDIES
                </span>

                <div className="h-[2px] w-44 bg-primary"></div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="container-custom">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-7xl font-normal text-text-muted text-center mt-16 tracking-wide"
            data-cursor="text-glow"
          >
            from startup to industry leaders
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
