import { Footer, Navbar, SkipLink } from '@/components'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/content/projects'

export function ProjectsIndex() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Section space="md" tone="surface">
          <Container size="wide">
            <h1 className="text-display-md">פרויקטים</h1>
            <ul className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-3 lg:gap-8">
              {projects.map((project) => (
                <li key={project.slug} className="min-w-0">
                  <ProjectCard project={project} headingLevel="h2" />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
