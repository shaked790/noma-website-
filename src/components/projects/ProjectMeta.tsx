import { cn } from '@/lib/cn'

export type ProjectMetaProps = {
  year: string
  type: string
  location?: string
  className?: string
}

export function ProjectMeta({ year, type, location, className }: ProjectMetaProps) {
  return (
    <p className={cn('text-caption text-ink-muted', className)}>
      <span className="ltr-isolate">{year}</span>
      <span aria-hidden="true"> | </span>
      {type}
      {location ? (
        <>
          <span aria-hidden="true"> | </span>
          {location}
        </>
      ) : null}
    </p>
  )
}
