'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from '@/src/contexts/LocaleContext'

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/iman-akrami', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/iminiaki', icon: Github, label: 'GitHub' },
  { href: 'mailto:iminiaki@gmail.com', icon: Mail, label: 'Email' },
]

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="border-t border-border/40 mt-8">
      <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground text-xs">{t.footer.rights}</p>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
