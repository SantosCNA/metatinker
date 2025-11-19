import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type TagVariant = 'default' | 'success' | 'warning'

const variantMap: Record<TagVariant, string> = {
  default: 'bg-accent-teal/10 text-accent-teal',
  success: 'bg-accent-teal/20 text-accent-teal',
  warning: 'bg-accent-amber/15 text-accent-amber',
}

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant
}

export function Tag({ className, variant = 'default', children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}


