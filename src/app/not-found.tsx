'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getLocaleFromPathname, getLocalePath } from '@/src/i18n'
import { translations } from '@/src/i18n'

export default function NotFound() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname ?? '/')
  const t = translations[locale]

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="font-display text-8xl font-bold text-gradient">404</p>
        <h1 className="font-display text-2xl font-semibold">{t.notFound.title}</h1>
        <p className="text-muted-foreground">{t.notFound.description}</p>
        <Button asChild className="rounded-full">
          <Link href={getLocalePath(locale)}>{t.notFound.backHome}</Link>
        </Button>
      </div>
    </div>
  )
}
