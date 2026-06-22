import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1">
        {label}
      </Badge>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}
