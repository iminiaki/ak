'use client'

import { createContext, useContext, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { translations, getDirection, getLocalePath, type Locale, type Translations } from '@/src/i18n'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  dir: 'ltr' | 'rtl'
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  const router = useRouter()
  const dir = getDirection(locale)
  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      const hash = window.location.hash
      router.push(`${getLocalePath(next)}${hash}`)
    },
    [locale, router]
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, dir }),
    [locale, setLocale, t, dir]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useTranslations() {
  return useLocale().t
}
