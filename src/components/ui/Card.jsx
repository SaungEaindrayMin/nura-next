import { motion } from "framer-motion";

const Card = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={
        hover ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}
      }
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl p-6 shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
