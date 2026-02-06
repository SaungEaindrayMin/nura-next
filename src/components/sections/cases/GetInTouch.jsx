import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import useEnterSlideMode from "../../../hooks/useEnterSlideMode";

const GetInTouch = ({ serviceMode = false }) => {
  const ref = useEnterSlideMode();

  return (
    <section
      ref={ref}
      className={`h-screen flex items-center justify-center font-grotesk ${
        serviceMode ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container-custom text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-5 text-lg uppercase font-medium ${
            serviceMode ? "text-white" : "text-black"
          }`}
        >
          Seeking partners in change?
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className={`mb-8 text-6xl font-medium tracking-wide leading-tight ${
            serviceMode ? "text-[#00C4CC]" : "text-primary"
          }`}
        >
          Let's talk about <br /> your project.
        </motion.h1>

        <Button
          variant="outline"
          size="sm"
          icon={<ArrowRight size={18} />}
          className={
            serviceMode
              ? "border-white text-white hover:bg-white hover:text-black hover:border-white"
              : ""
          }
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
