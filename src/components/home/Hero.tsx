import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { hero } from '@/content/home'
import { primaryCta } from '@/content/navigation'
import { cn } from '@/lib/cn'

/*
 * Cover grade. Structure is unchanged. The photograph stays as authored; a
 * global ink mix and a start-side veil put ivory type into the same
 * relationship as the approved reference — cinematic, not a bright UI card.
 *
 * Desktop: type in the start (right) field. Mobile: type in the lower third,
 * room held above.
 */
const coverGrade = {
  backgroundColor: 'color-mix(in oklab, var(--color-ink) 30%, transparent)',
}

const typeVeilDesktop = {
  backgroundImage:
    'linear-gradient(to left, color-mix(in oklab, var(--color-ink) 46%, transparent), color-mix(in oklab, var(--color-ink) 16%, transparent) 40%, transparent 68%)',
}

const typeVeilMobile = {
  backgroundImage:
    'linear-gradient(to top, color-mix(in oklab, var(--color-ink) 52%, transparent), color-mix(in oklab, var(--color-ink) 18%, transparent) 46%, transparent 78%)',
}

const quietInverse = {
  color: 'color-mix(in oklab, var(--color-ink-inverse) 72%, transparent)',
}

const quieterInverse = {
  color: 'color-mix(in oklab, var(--color-ink-inverse) 58%, transparent)',
}

const AUTOPLAY_MS = 5500

export function Hero() {
  const { secondaryCta, aside, scrollCue, slides } = hero
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReducedMotion(motion.matches)
    const onVisibility = () => setHidden(document.hidden)
    onMotion()
    onVisibility()
    motion.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      motion.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion || hidden) return
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(id)
  }, [hidden, index, reducedMotion, slides.length])

  return (
    <section className="relative isolate min-h-svh overflow-hidden text-ink-inverse">
      <figure className="reveal-media absolute inset-0">
        {slides.map((slide, slideIndex) => {
          const active = slideIndex === index
          return (
            <img
              key={slide.src}
              src={slide.src}
              alt={active ? slide.alt : ''}
              aria-hidden={active ? undefined : true}
              width={slide.width}
              height={slide.height}
              decoding="async"
              fetchPriority={slideIndex === 0 ? 'high' : 'low'}
              loading="eager"
              className={cn(
                'absolute inset-0 media-cover object-[48%_42%] transition-opacity duration-(--duration-cinematic) ease-[var(--ease-out)] lg:object-[40%_46%]',
                active ? 'opacity-100' : 'opacity-0',
              )}
            />
          )
        })}
      </figure>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={coverGrade}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={typeVeilDesktop}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={typeVeilMobile}
      />

      <div className="relative flex min-h-svh flex-col justify-end lg:justify-center">
        <Container
          size="wide"
          className="flex justify-start pb-[calc(var(--section-y-sm)+6vh)] pt-[clamp(5.5rem,12vh,7rem)] lg:pb-(--section-y-sm) lg:pt-[clamp(5.5rem,12vh,7.5rem)]"
        >
          <div className="w-full max-w-narrow">
            <p className="reveal text-eyebrow" style={quietInverse}>
              {hero.eyebrow}
            </p>

            <h1 className="hero-display reveal mt-3 whitespace-pre-line lg:mt-4">
              {hero.headline}
            </h1>

            <p
              className="reveal mt-6 max-w-measure text-lead [--reveal-delay:var(--duration-fast)] lg:mt-7"
              style={quietInverse}
            >
              {hero.supporting}
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 [--reveal-delay:var(--duration-base)] lg:mt-10">
              <Button href={primaryCta.href} variant="solid" size="md">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="outline" size="sm" inverse>
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <ul
        aria-hidden="true"
        className="absolute end-(--gutter) top-1/2 hidden -translate-y-1/2 flex-col gap-2 text-eyebrow lg:flex"
        style={quieterInverse}
      >
        {aside.map((word) => (
          <li key={word} className="ltr-isolate">
            {word}
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block">
        <Container size="wide" className="flex items-end justify-between pb-(--gutter)">
          <ol
            className="pointer-events-auto ltr-isolate flex items-baseline gap-5 text-eyebrow"
            style={quieterInverse}
          >
            {slides.map((_, slideIndex) => {
              const current = slideIndex === index
              const label = String(slideIndex + 1).padStart(2, '0')
              return (
                <li
                  key={label}
                  className={
                    current
                      ? 'hairline-b border-ink-inverse pb-1 text-ink-inverse'
                      : undefined
                  }
                >
                  <button
                    type="button"
                    aria-label={`תמונה ${slideIndex + 1} מתוך ${slides.length}`}
                    aria-current={current ? true : undefined}
                    onClick={() => setIndex(slideIndex)}
                    className="border-0 bg-transparent p-0 font-body text-eyebrow text-inherit"
                  >
                    <span className="ltr-isolate">{label}</span>
                  </button>
                </li>
              )
            })}
          </ol>

          <p
            aria-hidden="true"
            className="flex items-center gap-2 text-caption"
            style={quieterInverse}
          >
            {scrollCue}
            <span
              className="size-1.5 rotate-45 border-solid border-current"
              style={{
                borderRightWidth: 'var(--border-hairline)',
                borderBottomWidth: 'var(--border-hairline)',
              }}
            />
          </p>
        </Container>
      </div>
    </section>
  )
}
