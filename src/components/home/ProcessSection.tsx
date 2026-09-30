import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { process } from '@/content/home'
import { cn } from '@/lib/cn'

type StepIcon = (typeof process.steps)[number]['icon']

const iconClass = 'size-6 text-ink'

function ProcessIcon({ name }: { name: StepIcon }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className: iconClass,
  }

  switch (name) {
    case 'listen':
      return (
        <svg {...common}>
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
          <path d="M21 12a9 9 0 0 1-14.2 7.3L3 20l1-3.6A9 9 0 1 1 21 12Z" />
        </svg>
      )
    case 'concept':
      return (
        <svg {...common}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        </svg>
      )
    case 'build':
      return (
        <svg {...common}>
          <path d="M21 16.5 12 21 3 16.5" />
          <path d="M21 12 12 16.5 3 12" />
          <path d="m12 3 9 4.5L12 12 3 7.5Z" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20H4Z" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
  }
}

export function ProcessSection() {
  const { eyebrow, headline, body, cta, aside, image, steps } = process

  return (
    <Section id="process" space="md" tone="surface" className="hairline-t border-border">
      <Container size="wide">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-x-12">
          <Reveal className="order-1 min-w-0 lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <p className="reveal-view text-eyebrow text-ink-muted">{eyebrow}</p>
            <h2 className="reveal-view mt-4 text-display-lg [--reveal-delay:var(--duration-stagger)]">
              {headline}
            </h2>
            <p className="reveal-view mt-6 max-w-measure text-body text-ink-secondary [--reveal-delay:calc(var(--duration-stagger)*2)]">
              {body}
            </p>
          </Reveal>

          <Reveal
            as="figure"
            className="reveal-image order-2 min-w-0 overflow-hidden lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-[30%_80%] lg:h-full lg:min-h-80 lg:aspect-auto"
            />
          </Reveal>

          <div className="order-3 min-w-0 lg:col-span-8 lg:col-start-1 lg:row-start-2">
            <Reveal as="ol" className="reveal-view grid grid-cols-1 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className={cn(
                    'group motion-rule hairline-b border-border py-8 last:border-b-0 lg:border-b-0 lg:py-0',
                    index > 0 &&
                      'lg:border-s lg:border-border lg:ps-7 lg:[border-inline-start-width:var(--border-hairline)]',
                    index < steps.length - 1 && 'lg:pe-7',
                  )}
                >
                  <p className="text-caption text-ink-muted">
                    <span className="motion-scale ltr-isolate">{step.number}</span>
                  </p>
                  <div className="motion-arrow-sm mt-4">
                    <ProcessIcon name={step.icon} />
                  </div>
                  <h3 className="mt-5 text-body-sm">{step.title}</h3>
                  <p className="mt-2 text-caption text-ink-muted">{step.description}</p>
                </li>
              ))}
            </Reveal>

            <div className="mt-12 flex flex-wrap items-end justify-between gap-8 lg:mt-16">
              <Button href={cta.href} variant="outline">
                {cta.label}
                <span aria-hidden="true" className="motion-arrow ms-2">
                  ←
                </span>
              </Button>
              <p
                aria-hidden="true"
                className="text-caption leading-relaxed text-ink-muted"
              >
                {aside.map((line) => (
                  <span key={line} className="ltr-isolate block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
