import { useRef, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { StudioAboutModal } from '@/components/home/StudioAboutModal'
import { studio } from '@/content/home'

const TRIGGER_ID = 'studio-about-trigger'

function splitNoma(text: string) {
  const marker = 'NOMA'
  const index = text.indexOf(marker)
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <span className="ltr-isolate">{marker}</span>
      {text.slice(index + marker.length)}
    </>
  )
}

function scrollToContact() {
  const target = document.getElementById('contact')
  if (!target) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export function StudioSection() {
  const { portrait, quote, attribution, principles, cta } = studio
  const [aboutOpen, setAboutOpen] = useState(false)
  const pendingContact = useRef(false)

  function handleDialogClose() {
    const goContact = pendingContact.current
    pendingContact.current = false
    setAboutOpen(false)
    if (goContact) {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToContact)
      })
      return
    }
    document.getElementById(TRIGGER_ID)?.focus()
  }

  function openContactFromAbout() {
    pendingContact.current = true
    setAboutOpen(false)
  }

  return (
    <Section id="studio" space="md" tone="surface">
      <Container size="wide">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10">
          <Reveal className="order-1 min-w-0 lg:order-none lg:col-span-3 lg:col-start-4 lg:row-start-1">
            <p className="reveal-view text-eyebrow text-ink-muted">{studio.eyebrow}</p>
            <h2 className="reveal-view mt-4 whitespace-pre-line text-display-lg [--reveal-delay:var(--duration-stagger)]">
              {studio.headline}
            </h2>
            <p className="reveal-view mt-6 text-body text-ink-secondary [--reveal-delay:calc(var(--duration-stagger)*2)]">
              {splitNoma(studio.body)}
            </p>
            <p className="reveal-view mt-8 [--reveal-delay:calc(var(--duration-stagger)*3)]">
              <Button
                id={TRIGGER_ID}
                type="button"
                variant="link"
                aria-haspopup="dialog"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen(true)}
              >
                {cta.label}
                <span aria-hidden="true" className="motion-arrow ms-2">
                  ←
                </span>
              </Button>
            </p>
          </Reveal>

          <Reveal
            as="figure"
            className="reveal-image order-2 min-w-0 overflow-hidden lg:order-none lg:col-span-3 lg:col-start-7 lg:row-start-1"
          >
            <img
              src={portrait.src}
              width={portrait.width}
              height={portrait.height}
              alt={portrait.alt}
              loading="lazy"
              decoding="async"
              className="media-cover aspect-[4/5] object-[center_18%]"
            />
          </Reveal>

          <Reveal
            as="ul"
            className="reveal-view order-3 min-w-0 lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-1"
          >
            {principles.map((item) => (
              <li
                key={item.title}
                className="group motion-rule hairline-b border-border py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="motion-thumb size-16 shrink-0 object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-body-sm">{item.title}</p>
                    <p className="mt-1 text-caption text-ink-muted">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </Reveal>

          <Reveal
            as="blockquote"
            className="reveal-view order-4 min-w-0 lg:order-none lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:self-center"
          >
            <span
              aria-hidden="true"
              className="block font-display text-display-xl leading-none text-ink-muted"
            >
              ”
            </span>
            <p className="mt-4 text-display-sm font-normal">{quote}</p>
            <footer className="mt-8 flex items-center gap-3">
              <div>
                <cite className="block text-body-sm not-italic">{attribution.name}</cite>
                <p className="mt-1 text-caption text-ink-muted">{attribution.role}</p>
              </div>
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-border" />
            </footer>
          </Reveal>
        </div>
      </Container>

      <StudioAboutModal
        open={aboutOpen}
        onClose={handleDialogClose}
        onContact={openContactFromAbout}
      />
    </Section>
  )
}
