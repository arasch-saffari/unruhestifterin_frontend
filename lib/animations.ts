import { Variants } from "framer-motion";

export const animations: { [key: string]: Variants } = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
  iconHover: {
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
  },
  menuItem: {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  gradientBackground: {
    animate: {
      background: [
        "linear-gradient(45deg, #1A091F, #2D1535)",
        "linear-gradient(45deg, #2D1535, #3D1D47)",
        "linear-gradient(45deg, #1A091F, #3D1D47)",
      ],
    },
  },
};