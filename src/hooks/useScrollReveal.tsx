'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
  children?: string
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = options.children ? el.querySelectorAll(options.children) : el

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: options.y ?? 40,
        opacity: options.opacity ?? 0,
        duration: options.duration ?? 0.8,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [options.y, options.opacity, options.duration, options.delay, options.stagger, options.start, options.children])

  return ref
}
