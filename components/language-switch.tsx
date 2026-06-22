'use client'

import { useRouter } from 'next/navigation'
import { localeLabels, getLocalePath, type Locale } from '@/src/i18n'
import { useLocale } from '@/src/contexts/LocaleContext'
import { cn } from '@/lib/utils'

interface LanguageSwitchProps {
  className?: string
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { locale } = useLocale()
  const router = useRouter()

  const navigate = (target: Locale) => {
    if (target === locale) return
    router.push(`${getLocalePath(target)}${window.location.hash}`)
  }

  return (
    <div
      className={cn(
        'inline-flex h-9 items-center rounded-full px-3 text-xs font-semibold gap-1.5',
        className
      )}
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => navigate('en')}
        className={cn(
          'transition-colors',
          locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
        )}
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        {localeLabels.en}
      </button>
      <span className="text-muted-foreground/50">|</span>
      <button
        type="button"
        onClick={() => navigate('fa')}
        className={cn(
          'transition-colors',
          locale === 'fa' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
        )}
        aria-current={locale === 'fa' ? 'page' : undefined}
      >
        {localeLabels.fa}
      </button>
    </div>
  )
}
