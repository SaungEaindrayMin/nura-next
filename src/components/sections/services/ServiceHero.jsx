import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 font-grotesk">
      <div className="container-custom text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-4xl sm:text-5xl md:text-8xl font-medium tracking-wide leading-tight uppercase"
        >
          <p className="text-white"> Boost Your</p>
          <p className="text-[#00E3FE]">Growth</p>
        </motion.h1>
      </div>
    </section>
  );
};

export default ServiceHero;
