import { en } from './locales/en'
import { fa } from './locales/fa'
import type { Locale, Translations } from './types'

export type { Locale, Translations }

export const locales: Locale[] = ['en', 'fa']

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fa: 'FA',
}

export const translations: Record<Locale, Translations> = {
  en,
  fa,
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'fa' ? 'rtl' : 'ltr'
}

export function getLocalePath(locale: Locale): string {
  return locale === 'fa' ? '/fa' : '/'
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/fa' || pathname.startsWith('/fa/') ? 'fa' : 'en'
}
