import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type RevealTag = 'div' | 'figure' | 'blockquote' | 'ul' | 'ol' | 'li'

type RevealProps = {
  as?: RevealTag
  className?: string
  children: ReactNode
}

/*
 * Presentational viewport gate. Adds is-inview once, then disconnects.
 * No React state, timers, or animation library.
 */
export function Reveal({ as = 'div', className, children }: RevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null)
  const classes = cn(className)

  function bind(node: HTMLElement | null) {
    nodeRef.current = node
  }

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-inview')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-inview')
        io.disconnect()
      },
      { threshold: 0.12 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  switch (as) {
    case 'figure':
      return (
        <figure ref={bind} className={classes}>
          {children}
        </figure>
      )
    case 'blockquote':
      return (
        <blockquote ref={bind} className={classes}>
          {children}
        </blockquote>
      )
    case 'ul':
      return (
        <ul ref={bind} className={classes}>
          {children}
        </ul>
      )
    case 'ol':
      return (
        <ol ref={bind} className={classes}>
          {children}
        </ol>
      )
    case 'li':
      return (
        <li ref={bind} className={classes}>
          {children}
        </li>
      )
    default:
      return (
        <div ref={bind} className={classes}>
          {children}
        </div>
      )
  }
}
