import { Link } from 'react-router'
import { ProjectMeta } from '@/components/projects/ProjectMeta'
import type { Project } from '@/content/projects'
import { projectPath } from '@/content/projects'
import { cn } from '@/lib/cn'

export type ProjectCardProps = {
  project: Project
  className?: string
  headingLevel?: 'h2' | 'h3'
}

export function ProjectCard({
  project,
  className,
  headingLevel: Heading = 'h3',
}: ProjectCardProps) {
  return (
    <Link
      to={projectPath(project.slug)}
      aria-label={`${project.title}, ${project.year}`}
      className={cn('group block min-h-(--tap-target-min)', className)}
    >
      <figure className="overflow-hidden">
        <img
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          width={project.heroImage.width}
          height={project.heroImage.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 64rem) 30vw, 100vw"
          className="motion-zoom aspect-[16/10] w-full object-cover"
        />
      </figure>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <Heading className="text-display-sm">{project.title}</Heading>
          <p className="mt-2 text-body-sm text-ink-secondary">{project.shortDescription}</p>
        </div>
        <span aria-hidden="true" className="motion-arrow mt-1 shrink-0 text-body-sm">
          ←
        </span>
      </div>

      <ProjectMeta
        year={project.year}
        type={project.type}
        className="mt-3 transition-colors duration-(--duration-fast) ease-out group-hover:text-ink-secondary group-focus-visible:text-ink-secondary"
      />
    </Link>
  )
}
