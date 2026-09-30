import { Container } from '@/components/Container'
import { ProjectFigure } from '@/components/projects/ProjectFigure'
import type { ProjectImage } from '@/content/projects'

export function ProjectMaterials({
  items,
  image,
}: {
  items: string[]
  image: ProjectImage
}) {
  return (
    <Container size="wide" className="pb-12 lg:pb-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="min-w-0 lg:col-span-4 lg:col-start-1">
          <h2 className="text-display-sm">חומרים ופרטים</h2>
          <ul className="mt-5">
            {items.map((item) => (
              <li
                key={item}
                className="hairline-b border-border py-2.5 text-body-sm last:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <ProjectFigure
            image={image}
            aspect="aspect-[4/3]"
            sizes="(min-width: 64rem) 50vw, 100vw"
          />
        </div>
      </div>
    </Container>
  )
}
