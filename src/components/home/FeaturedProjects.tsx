import { Link } from 'react-router'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { featuredProjectsIntro, projects } from '@/content/projects'

export function FeaturedProjects() {
  const { heading, allLabel, allHref, slides, currentSlide } = featuredProjectsIntro

  return (
    <Section id="projects" space="md" tone="surface" className="hairline-t border-border">
      <Container size="wide">
        <div className="flex items-end justify-between gap-6">
          <h2 className="reveal text-display-md">{heading}</h2>
          <Link
            to={allHref}
            className="reveal inline-flex min-h-(--tap-target-min) shrink-0 items-center text-body-sm text-ink-secondary transition-colors duration-(--duration-fast) ease-out hover:text-accent"
          >
            {allLabel}
            <span aria-hidden="true" className="ms-2">
              ←
            </span>
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-12 md:gap-14 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <li key={project.slug} className="reveal min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <ol
          dir="ltr"
          aria-hidden="true"
          className="mt-14 hidden justify-end gap-3 text-caption text-ink-muted lg:flex"
        >
          {slides.map((slide, index) => (
            <li
              key={slide}
              className={
                index === currentSlide ? 'hairline-b border-ink text-ink' : undefined
              }
            >
              <span className="ltr-isolate">{slide}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
