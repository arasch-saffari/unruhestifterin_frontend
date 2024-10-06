import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const iconVariants: Variants = {
  initial: { scale: 1, color: "currentColor" },
  hover: {
    scale: [1, 1.2, 1],
    color: ["currentColor", "#EC4899", "currentColor"],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={iconVariants}
    initial="initial"
    whileHover="hover"
    className="flex items-center justify-center"
  >
    {children}
  </motion.div>
);
