import { Link } from 'react-router'
import { Container } from '@/components/Container'
import type { Project } from '@/content/projects'
import { projectPath } from '@/content/projects'

export function NextProject({ project }: { project: Project }) {
  return (
    <Container size="wide" className="pb-16 lg:pb-20">
      <Link
        to={projectPath(project.slug)}
        aria-label={`הפרויקט הבא: ${project.title}`}
        className="group block min-h-(--tap-target-min)"
      >
        <p className="text-caption text-ink-muted">הפרויקט הבא</p>
        <figure className="mt-5 overflow-hidden">
          <img
            src={project.heroImage.src}
            alt=""
            width={project.heroImage.width}
            height={project.heroImage.height}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 64rem) 80vw, 100vw"
            className="motion-zoom aspect-[16/9] w-full object-cover"
          />
        </figure>
        <div className="mt-5 flex items-start justify-between gap-4">
          <h2 className="text-display-sm">{project.title}</h2>
          <span aria-hidden="true" className="motion-arrow mt-1 shrink-0 text-body-sm">
            ←
          </span>
        </div>
      </Link>
    </Container>
  )
}
