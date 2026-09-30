import { Container } from '@/components/Container'
import { ProjectFigure } from '@/components/projects/ProjectFigure'
import { ProjectMaterials } from '@/components/projects/ProjectMaterials'
import { ProjectNote } from '@/components/projects/ProjectNote'
import { ProjectResult } from '@/components/projects/ProjectResult'
import type { Project, ProjectImage } from '@/content/projects'

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { gallery } = project

  return (
    <>
      <ProjectNote heading="האתגר">{project.challenge}</ProjectNote>
      <WideImage image={gallery.wide} />
      <PairImages images={gallery.pair} />
      <ProjectNote heading="הקונספט">{project.concept}</ProjectNote>
      <ProjectMaterials items={project.materials} image={gallery.detail} />
      <WideImage image={gallery.closing} />
      <ProjectResult>{project.result}</ProjectResult>
    </>
  )
}

function WideImage({ image }: { image: ProjectImage }) {
  return (
    <Container size="wide">
      <ProjectFigure
        image={image}
        aspect="aspect-[16/9]"
        sizes="(min-width: 64rem) 80vw, 100vw"
      />
    </Container>
  )
}

function PairImages({ images }: { images: [ProjectImage, ProjectImage] }) {
  return (
    <Container size="wide" className="mt-4 lg:mt-5">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {images.map((image) => (
          <li key={image.src} className="min-w-0">
            <ProjectFigure
              image={image}
              aspect="aspect-[16/10]"
              sizes="(min-width: 64rem) 40vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
