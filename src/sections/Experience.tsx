'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { useTranslations } from '@/src/contexts/LocaleContext'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-exp="item"]', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-secondary/30 dark:bg-card/20">
      <div className="section-container space-y-16">
        <SectionHeading
          label={t.experience.label}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute start-[7px] lg:start-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          <div className="space-y-8">
            {t.experience.items.map(({ period, location, role, company, description, tags }) => (
              <div key={`${company}-${period}`} data-exp="item" className="relative ps-8 lg:ps-12">
                <div className="absolute start-0 top-1.5 h-3.5 w-3.5 lg:h-4 lg:w-4 rounded-full border-2 border-primary bg-background" />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-primary text-sm font-medium">{period}</span>
                    <span className="text-muted-foreground hidden sm:inline">·</span>
                    <span className="text-muted-foreground text-sm">{location}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-display font-semibold">{role}</span>
                    <span className="text-muted-foreground hidden sm:inline">—</span>
                    <span className="text-foreground/80 text-sm">{company}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal border-border/60">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
