'use client'

import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { useTranslations } from '@/src/contexts/LocaleContext'

export function Work() {
  const t = useTranslations()

  return (
    <section id="work" className="section-padding">
      <div className="section-container space-y-16">
        <SectionHeading
          label={t.work.label}
          title={t.work.title}
          description={t.work.description}
        />

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {t.work.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
