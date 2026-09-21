import type { Transition, Variants } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transition: Transition = {
  duration: 0.85,
  ease: easeOutExpo,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...transition, duration: 1 } },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};
