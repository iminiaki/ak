'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn('h-9 w-9 rounded-full', className)} aria-label="Toggle theme">
        <Sun className="h-4 w-4 opacity-0" />
      </Button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('h-9 w-9 rounded-full', className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className={cn('h-4 w-4 transition-all', isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90 absolute')} />
      <Moon className={cn('h-4 w-4 transition-all', !isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90 absolute')} />
    </Button>
  )
}
