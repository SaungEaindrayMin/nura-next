import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import useEnterSlideMode from "../../../hooks/useEnterSlideMode";

const HomePage = () => {
  const ref = useEnterSlideMode();

  return (
    <section
      ref={ref}
      className="
        relative h-screen w-full
        flex items-center justify-center
        font-grotesk
        bg-gradient-to-b
        from-[#0B5ED7]
        via-[#083A8C]
        to-[#010B1C]
      "
    >
      <div className="text-center px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="
            mb-4
            text-5xl md:text-6xl
            font-medium
            tracking-wider
            uppercase
            text-transparent
            stroke-white
          "
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.65)",
          }}
        >
          TURN YOUR IDEA INTO
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="
            mb-10
            text-6xl md:text-7xl
            font-semibold
            tracking-wide
            text-white
          "
        >
          BUSINESS SOLUTIONS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <Button
            variant="outline"
            size="sm"
            icon={<ArrowRight size={16} />}
            className="
              border-white/70
              text-white
              hover:bg-white
              hover:text-[#083A8C]
              transition-all
            "
          >
            GET IN TOUCH
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
