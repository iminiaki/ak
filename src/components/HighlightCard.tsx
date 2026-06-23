'use client'

import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface HighlightCardProps {
  index: number
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function HighlightCard({ index, title, description, icon: Icon, className }: HighlightCardProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm',
        'transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card/80',
        'hover:shadow-lg hover:shadow-primary/[0.06]',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-8 -top-8 h-28 w-28 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.12]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <CardContent className="relative flex flex-col gap-5 !p-6 lg:!p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
              'border border-primary/15 bg-primary/[0.06] text-primary',
              'transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary/10'
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <span className="font-display text-[11px] font-medium tabular-nums tracking-[0.2em] text-muted-foreground/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="space-y-2.5">
          <h3 className="font-display text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary lg:text-[1.05rem]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
