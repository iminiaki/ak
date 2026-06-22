'use client'

import { ReactNode } from 'react'
import { GradientMesh } from '../components/GradientMesh'

interface BodyProps {
  children?: ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GradientMesh />
      <div className="relative mx-auto w-full max-w-8xl">{children}</div>
    </div>
  )
}
