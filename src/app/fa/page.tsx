import type { Metadata } from 'next'
import { fa as faTranslations } from '@/src/i18n/locales/fa'
import FaPageClient from './FaPageClient'

export const metadata: Metadata = {
  title: faTranslations.meta.title,
  description: faTranslations.meta.description,
}

export default function FaPage() {
  return <FaPageClient />
}
