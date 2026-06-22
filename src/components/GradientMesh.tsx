'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function GradientMesh() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)
  const orb3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1.current, {
        x: 30,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(orb2.current, {
        x: -40,
        y: 30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(orb3.current, {
        x: 20,
        y: 40,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(220_30%_96%)_0%,hsl(var(--background))_60%)] dark:bg-[radial-gradient(ellipse_at_top,hsl(240_10%_8%)_0%,hsl(var(--background))_60%)]" />
      <div
        ref={orb1}
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full blur-[120px] bg-[#172554]/10 dark:bg-[#172554]/25"
      />
      <div
        ref={orb2}
        className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full blur-[100px] bg-[#a30098]/8 dark:bg-[#a30098]/15"
      />
      <div
        ref={orb3}
        className="absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full blur-[110px] bg-[#172554]/8 dark:bg-[#172554]/12"
      />
      <div className="absolute inset-0 bg-[url('/images/background/noise.png')] opacity-[0.04] dark:opacity-[0.03]" />
    </div>
  )
}
