'use client'

import { LocaleProvider } from '@/src/contexts/LocaleContext'
import { PortfolioPage } from '@/src/components/PortfolioPage'

export default function FaPageClient() {
  return (
    <LocaleProvider locale="fa">
      <PortfolioPage />
    </LocaleProvider>
  )
}
