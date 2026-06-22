'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export interface Project {
  title: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      })
    })

    return () => ctx.revert()
  }, [index])

  const content = (
    <Card
      ref={cardRef}
      className={cn(
        'group border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80',
        project.featured && 'md:col-span-2'
      )}
    >
      <CardContent className="p-6 lg:p-8 flex flex-col h-full gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="font-display text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>
          {project.href && (
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors rtl:rotate-180" />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}
