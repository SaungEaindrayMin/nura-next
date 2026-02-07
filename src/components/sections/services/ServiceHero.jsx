import { motion } from "framer-motion";
import HeroTunnel from "../../ui/HeroTunnel";

const ServiceHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 font-grotesk">
      <HeroTunnel />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="uppercase mix-blend-screen text-5xl md:text-8xl font-medium tracking-wide"
        >
          <span className="block text-white">Boost Your</span>
          <span className="block text-[#00CFE7]">Growth</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default ServiceHero;
