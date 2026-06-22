'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Body } from '../sections/Body'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { Home } from '../sections/Home'
import About from '../sections/About'
import { Experience } from '../sections/Experience'
import { Work } from '../sections/Work'
import { Contact } from '../sections/Contact'
import TickerTape from '../components/TickerTape'
import useWindow from '../hooks/useWindow'

const CursorFollower = dynamic(() => import('../utils/CursorFollower'), { ssr: false })

export function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const viewPort = useWindow()
  const isDesktop = viewPort === 'isDesktop'

  useEffect(() => {
    setMounted(true)
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <Body>
      <Header />
      <main>
        <Home />
        <TickerTape />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
      {mounted && isDesktop && <CursorFollower />}
    </Body>
  )
}
