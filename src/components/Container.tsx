import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerSize = 'prose' | 'narrow' | 'content' | 'wide'

/*
 * `prose` maps to max-w-measure: Tailwind ships a static max-w-prose (65ch)
 * that would win over a --container-prose token, so the token carries the
 * collision-free name while the prop keeps the readable one.
 */
const sizeClass: Record<ContainerSize, string> = {
  prose: 'max-w-measure',
  narrow: 'max-w-narrow',
  content: 'max-w-content',
  wide: 'max-w-wide',
}

export type ContainerProps = {
  /* Kept to a short list so containers stay layout elements, not arbitrary tags. */
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article'
  size?: ContainerSize
  className?: string
  children?: ReactNode
}

export function Container({
  as: Tag = 'div',
  size = 'content',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-(--gutter)',
        sizeClass[size],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
