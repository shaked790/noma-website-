import { Navigate, useParams } from 'react-router'
import { Footer, Navbar, SkipLink } from '@/components'
import { NextProject } from '@/components/projects/NextProject'
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy'
import { ProjectHero } from '@/components/projects/ProjectHero'
import { getNextProject, getProjectBySlug } from '@/content/projects'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const next = getNextProject(project.slug)

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <article className="bg-surface text-ink">
          <ProjectHero project={project} />
          <ProjectCaseStudy project={project} />
          {next ? (
            <div className="hairline-t border-border pt-12 lg:pt-16">
              <NextProject project={next} />
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  )
}
