'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import gsap from 'gsap'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitch } from '@/components/language-switch'
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations()
  const { dir } = useLocale()
  const [activeLink, setActiveLink] = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const navItems = useMemo(
    () => [
      { path: '#home', title: t.nav.home },
      { path: '#about', title: t.nav.about },
      { path: '#experience', title: t.nav.experience },
      { path: '#work', title: t.nav.work },
      { path: '#contact', title: t.nav.contact },
    ],
    [t]
  )

  useEffect(() => {
    const hash = window.location.hash || '#home'
    setActiveLink(hash)

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
    })

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleClick = (path: string) => {
    setActiveLink(path)
    setOpen(false)
    document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', path)
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="section-container">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 lg:px-6 h-14 transition-all duration-300',
            scrolled ? 'glass shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent'
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleClick('#home')
            }}
            className="flex items-center group"
          >
            <img src="/images/logo/AK-logo.png" alt="AK" className="h-8 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ path, title }) => (
              <a
                key={path}
                href={path}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(path)
                }}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  activeLink === path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                {title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSwitch />
            <ThemeToggle />

            <Button
              size="sm"
              className="hidden sm:inline-flex rounded-full px-5"
              onClick={() => handleClick('#contact')}
            >
              {t.nav.hireMe}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t.nav.openMenu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={dir === 'rtl' ? 'left' : 'right'} className="glass border-border/50">
                <SheetHeader>
                  <SheetTitle className="font-display text-start">{t.nav.navigation}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map(({ path, title }) => (
                    <a
                      key={path}
                      href={path}
                      onClick={(e) => {
                        e.preventDefault()
                        handleClick(path)
                      }}
                      className={cn(
                        'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                        activeLink === path
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      )}
                    >
                      {title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-border/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.nav.language}</span>
                    <LanguageSwitch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.nav.theme}</span>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
