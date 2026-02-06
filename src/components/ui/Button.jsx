import { motion } from "framer-motion";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-xs font-grotesk font-medium transition-all duration-300";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg",
    secondary:
      "border border-secondary text-white hover:bg-secondary hover:text-primary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    third:
      "border border-third text-third hover:bg-third hover:text-third",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
};
