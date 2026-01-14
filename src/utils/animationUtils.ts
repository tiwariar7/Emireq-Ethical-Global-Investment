// Define Variants type locally since it's not exported from framer-motion v12
export type Variants = {
  [key: string]: {
    [key: string]: any;
  };
};

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Utility functions for animations
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return baseDelay * index;
};

export const createScrollTrigger = (threshold: number = 0.1) => ({
  triggerOnce: true,
  threshold
});

// Easing functions
export const easeOutCubic = [0.33, 1, 0.68, 1];
export const easeInOutCubic = [0.65, 0, 0.35, 1];

// Animation duration presets
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8
} as const;