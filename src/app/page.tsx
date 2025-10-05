'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Body } from '../sections/Body'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { Home } from '../sections/Home'
import About from '../sections/About'
import { Contact } from '../sections/Contact'
import TickerTape from '../components/TickerTape'
const CursorFollower = dynamic(() => import('../utils/CursorFollower'), { ssr: false })
import useWindow from '../hooks/useWindow'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const viewPort = useWindow()
  const isDesktop = viewPort === 'isDesktop'

  useEffect(() => {
    setMounted(true)
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    }
  }, [])

  return (
    <Body>
      <Header />
      <main>
        <Home />
        <TickerTape
          bgColor=''
          strings={['React', 'Next JS','JavaScript', 'Typescript', 'Tailwind', 'MUI', 'Zustand', 'Redux' ,'TanStack Query']}
          direction='left'
          separator='۞'
          className='rounded-xl backdrop-blur-md backdrop-brightness-50'
        />
        <About />
        <Contact />
      </main>
      <Footer />
      {mounted && isDesktop && <CursorFollower />}
    </Body>
  )
}


