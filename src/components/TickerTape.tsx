'use client'

import React from 'react'

interface TickerTapeProps {
  strings?: string[]
  className?: string
}

const TickerTape: React.FC<TickerTapeProps> = ({
  strings = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'shadcn/ui'],
  className,
}) => {
  const items = [...strings, ...strings]

  return (
    <div className={`relative overflow-hidden border-y border-border/50 bg-card/30 py-4 ${className ?? ''}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((text, i) => (
          <React.Fragment key={i}>
            <span className="mx-8 text-muted-foreground text-sm font-medium uppercase tracking-[0.15em]">
              {text}
            </span>
            <span className="text-[#a30098] text-xs">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TickerTape
