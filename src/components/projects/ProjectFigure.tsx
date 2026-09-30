import type { ProjectImage } from '@/content/projects'
import { cn } from '@/lib/cn'

export type ProjectFigureProps = {
  image: ProjectImage
  aspect?: string
  priority?: boolean
  className?: string
  sizes?: string
}

export function ProjectFigure({
  image,
  aspect = 'aspect-[16/10]',
  priority = false,
  className,
  sizes,
}: ProjectFigureProps) {
  return (
    <figure className={cn('overflow-hidden', className)}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        fetchPriority={priority ? 'high' : undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('w-full object-cover', aspect)}
      />
    </figure>
  )
}
