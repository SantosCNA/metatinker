import type { Transition, Variants } from 'framer-motion'

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const baseTransition: Transition = {
  duration: 0.6,
  ease: 'easeOut',
}


