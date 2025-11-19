import { type HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient'
type ButtonSize = 'md' | 'lg'

type CustomButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-background hover:bg-brand-light focus-visible:ring-brand-primary/60',
  secondary:
    'border border-text-secondary/40 text-text-primary hover:border-text-primary hover:bg-text-primary/10 focus-visible:ring-brand-primary/60',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-background-card/60 focus-visible:ring-brand-primary/60',
  gradient:
    'bg-neon-gradient text-background shadow-glow hover:brightness-110 focus-visible:ring-brand-primary/60',
}

const sizeMap: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function CustomButton({
  href,
  className,
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: CustomButtonProps) {
  const sharedClassName = cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition duration-micro focus-visible:outline-none',
    variantMap[variant],
    sizeMap[size],
    className,
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={sharedClassName}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={sharedClassName}
      {...props}
    >
      {children}
    </motion.button>
  )
}

