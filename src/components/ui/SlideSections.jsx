import { motion } from "framer-motion";
import useSlideScroll from "../../hooks/useSlideScroll";

const SlideSections = ({ children }) => {
  const index = useSlideScroll(children.length);

  return (
    <div className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {children.map((child, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ y: `${(i - index) * 100}%` }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SlideSections;
