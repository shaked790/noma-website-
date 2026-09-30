import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionSpace = 'sm' | 'md' | 'lg'
type SectionTone = 'surface' | 'muted' | 'raised' | 'contrast'

const spaceClass: Record<SectionSpace, string> = {
  sm: 'py-(--section-y-sm)',
  md: 'py-(--section-y)',
  lg: 'py-(--section-y-lg)',
}

const toneClass: Record<SectionTone, string> = {
  surface: 'bg-surface text-ink',
  muted: 'bg-surface-muted text-ink',
  raised: 'bg-surface-raised text-ink',
  contrast: 'bg-surface-contrast text-ink-inverse',
}

export type SectionProps = {
  space?: SectionSpace
  tone?: SectionTone
  id?: string
  className?: string
  children?: ReactNode
}

/*
 * Owns vertical rhythm and background only. Compose a Container inside to set
 * the measure, so the two concerns stay independently adjustable.
 */
export function Section({
  space = 'md',
  tone = 'surface',
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spaceClass[space], toneClass[tone], className)}
    >
      {children}
    </section>
  )
}
