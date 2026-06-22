'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AImage } from '../components/AImage'
import { useTranslations } from '@/src/contexts/LocaleContext'

const SKILLS = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'WordPress']

export function Home() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { value: '6+', label: t.hero.statYears },
    { value: '50+', label: t.hero.statProjects },
    { value: '3+', label: t.hero.statReact },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('[data-hero="label"]', { y: 20, opacity: 0, duration: 0.6 })
        .from('[data-hero="title"]', { y: 60, opacity: 0, duration: 0.9 }, '-=0.3')
        .from('[data-hero="desc"]', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('[data-hero="skills"]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.05 }, '-=0.4')
        .from('[data-hero="cta"]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('[data-hero="stats"]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')
        .from('[data-hero="image"]', { scale: 0.9, opacity: 0, duration: 1 }, '-=0.8')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100dvh] sm:h-[100dvh] sm:max-h-[100dvh] items-center overflow-hidden pt-[4.5rem] pb-6 sm:pb-6"
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 order-2 sm:order-1 min-w-0">
            <div data-hero="label">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1 text-xs">
                <span className="me-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                {t.hero.available}
              </Badge>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <p data-hero="label" className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] font-medium rtl:tracking-normal">
                {t.hero.role}
              </p>
              <h1
                data-hero="title"
                className="font-display text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                {t.hero.titleBefore}{' '}
                <span className="text-gradient">{t.hero.titleHighlight}</span>{' '}
                {t.hero.titleAfter}
              </h1>
            </div>

            <p data-hero="desc" className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
              {t.hero.description}
            </p>

            <div className="hidden min-[480px]:flex flex-wrap gap-1.5">
              {SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  data-hero="skills"
                  variant="secondary"
                  className="px-2 py-0.5 text-[10px] sm:text-xs font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button data-hero="cta" size="sm" className="rounded-full px-5 sm:px-6 sm:h-10 sm:text-sm" onClick={() => scrollTo('#work')}>
                {t.hero.viewProjects}
                <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
              <Button
                data-hero="cta"
                size="sm"
                variant="outline"
                className="rounded-full px-5 sm:px-6 sm:h-10 sm:text-sm"
                onClick={() => scrollTo('#contact')}
              >
                {t.hero.getInTouch}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 sm:pt-3 border-t border-border/50">
              {stats.map(({ value, label }) => (
                <div key={label} data-hero="stats">
                  <p className="font-display text-xl sm:text-2xl font-bold text-stat-value">{value}</p>
                  <p className="text-stat-label text-[10px] sm:text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-hero="image" className="order-1 sm:order-2 relative flex justify-center min-w-0">
            <div className="relative w-full max-w-[200px] sm:max-w-none aspect-square mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-20 blur-2xl animate-float" />
              <div className="relative rounded-2xl border-gradient overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#172554]/20 to-[#a30098]/20" />
                <AImage
                  src="/images/background/iman.png"
                  alt="Iman Akrami"
                  className="relative z-10 p-2 sm:p-3"
                />
              </div>
              <div className="absolute z-10 -bottom-2 -end-2 sm:-bottom-3 sm:-end-3 glass rounded-xl px-3 py-2 hidden sm:block">
                <p className="text-[10px] text-muted-foreground">{t.hero.basedIn}</p>
                <p className="font-display font-semibold text-xs">{t.hero.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        aria-label={t.hero.scrollAria}
        className="absolute bottom-3 sm:bottom-5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest rtl:normal-case">{t.hero.scroll}</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </button>
    </section>
  )
}
