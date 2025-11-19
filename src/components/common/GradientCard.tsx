import { type HTMLAttributes } from 'react'
import { type HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type GradientCardProps = Omit<HTMLMotionProps<'div'>, 'ref'> & {
  hover?: boolean
}

export function GradientCard({
  className,
  hover = true,
  children,
  ...props
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative rounded-card border border-white/6 bg-card-gradient p-6 shadow-glass backdrop-blur-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ElevatedCard({
  className,
  children,
  ...props
}: Omit<HTMLMotionProps<'div'>, 'ref'>) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'rounded-card border border-white/5 bg-background-card/70 p-6 shadow-card backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function BaseCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-card border border-white/5 bg-background-card/80 p-6 shadow-card backdrop-blur',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

