import type { Variants, Transition } from "framer-motion";
export const fadeInUp: Variants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
export const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
export const staggerContainer: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
export const defaultTransition: Transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };
export const viewportConfig = { once: true, margin: "-80px" } as const;
