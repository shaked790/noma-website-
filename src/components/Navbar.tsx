import type { KeyboardEvent } from 'react'
import { useRef, useState } from 'react'
import { Button } from './Button'
import { Container } from './Container'
import {
  navItems,
  primaryCta,
  wordmark,
  wordmarkTagline,
  type NavItem,
} from '@/content/navigation'
import { cn } from '@/lib/cn'

const MENU_ID = 'navbar-menu'

const linkBase =
  'flex min-h-(--tap-target-min) items-center text-body-sm transition-colors duration-(--duration-fast) ease-out'
const linkOnSurface = 'hover:text-accent'
const linkOnMedia = 'text-ink-inverse hover:text-ink-inverse'
const linkCurrentOnSurface = 'text-accent'
const linkCurrentOnMedia =
  'underline decoration-(--underline-thickness) underline-offset-(--underline-offset)'

export type NavbarProps = {
  items?: NavItem[]
  /* href of the current page; matched against item hrefs to set aria-current. */
  currentHref?: string
  /*
   * Sits on the hero photograph. Inverse type, no filled bar, so the cover
   * grade reads as one surface. The mobile sheet still uses the ivory surface.
   */
  overlay?: boolean
  className?: string
}

export function Navbar({
  items = navItems,
  currentHref,
  overlay = false,
  className,
}: NavbarProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const onMedia = overlay && !open

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      triggerRef.current?.focus()
    }
  }

  return (
    <header
      onKeyDown={handleKeyDown}
      className={cn(
        'z-40',
        overlay
          ? 'absolute start-0 end-0 top-0 w-full'
          : 'sticky top-0 hairline-b border-border bg-surface',
        overlay && !open && 'text-ink-inverse',
        overlay && open && 'bg-surface text-ink',
        className,
      )}
    >
      <Container
        size="wide"
        className={cn(
          'flex items-center justify-between gap-6',
          overlay ? 'py-5' : 'py-6',
        )}
      >
        <a
          href="/"
          className={cn(
            'flex flex-col items-start leading-none transition-colors duration-(--duration-fast) ease-out',
            onMedia ? 'hover:text-ink-inverse' : 'hover:text-accent',
          )}
        >
          <span className="font-display text-display-sm tracking-widest">{wordmark}</span>
          <span className="mt-1 text-caption">{wordmarkTagline}</span>
        </a>

        <nav aria-label="ניווט ראשי" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const isCurrent = item.href === currentHref
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cn(
                      linkBase,
                      onMedia ? linkOnMedia : linkOnSurface,
                      isCurrent && (onMedia ? linkCurrentOnMedia : linkCurrentOnSurface),
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button href={primaryCta.href} variant="solid" size="sm">
              {primaryCta.label}
            </Button>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((value) => !value)}
            className={cn(
              '-me-4 inline-flex min-h-(--tap-target-min) min-w-(--tap-target-min) items-center justify-center px-4 text-body-sm transition-colors duration-(--duration-fast) ease-out lg:hidden',
              onMedia ? 'hover:text-ink-inverse' : 'hover:text-accent',
            )}
          >
            {open ? 'סגירה' : 'תפריט'}
          </button>
        </div>
      </Container>

      <div
        id={MENU_ID}
        hidden={!open}
        className={cn(
          'hairline-t lg:hidden',
          overlay ? 'border-border bg-surface text-ink' : 'border-border',
        )}
      >
        <Container size="wide" className="py-6">
          <nav aria-label="ניווט ראשי במכשיר נייד">
            <ul className="flex flex-col">
              {items.map((item) => {
                const isCurrent = item.href === currentHref
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        linkBase,
                        linkOnSurface,
                        isCurrent && linkCurrentOnSurface,
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Button
            href={primaryCta.href}
            variant="solid"
            size="md"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            {primaryCta.label}
          </Button>
        </Container>
      </div>
    </header>
  )
}
