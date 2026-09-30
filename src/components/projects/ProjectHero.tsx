import { Container } from '@/components/Container'
import { ProjectFigure } from '@/components/projects/ProjectFigure'
import type { Project } from '@/content/projects'

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header>
      <ProjectFigure
        image={project.heroImage}
        aspect="aspect-[16/9] lg:aspect-[21/9]"
        priority
        sizes="100vw"
      />
      <Container size="narrow" className="pt-10 pb-2 lg:pt-14">
        <h1 className="text-display-lg">{project.title}</h1>
        <p className="mt-4 text-caption text-ink-muted">
          <span className="ltr-isolate">{project.year}</span>
          <span aria-hidden="true"> · </span>
          {project.type}
          <span aria-hidden="true"> · </span>
          {project.location}
        </p>
        <p className="mt-5 text-body text-ink-secondary">{project.shortDescription}</p>
      </Container>
    </header>
  )
}
