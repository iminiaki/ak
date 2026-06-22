'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '../components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslations } from '@/src/contexts/LocaleContext'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-about="heading"]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })

      gsap.from('[data-about="card"]', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: '[data-about="grid"]', start: 'top 85%' },
      })

      gsap.from('[data-about="bio"]', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: '[data-about="bio"]', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="section-container space-y-16">
        <div data-about="heading">
          <SectionHeading
            label={t.about.label}
            title={t.about.title}
            description={t.about.description}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div data-about="bio" className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">{t.about.bio1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.bio2}</p>
            <blockquote className="border-s-2 border-primary ps-4 italic text-foreground/80">
              &ldquo;{t.about.quote}&rdquo;
            </blockquote>
          </div>

          <div data-about="grid" className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {t.about.highlights.map(({ title, description }) => (
              <Card
                key={title}
                data-about="card"
                className="border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
