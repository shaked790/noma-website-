import { Button } from '@/components/Button'
import { Dialog } from '@/components/Dialog'
import { studioAbout } from '@/content/home'

const TITLE_ID = 'studio-about-heading'

type PrincipleIcon = (typeof studioAbout.principles)[number]['icon']

const iconClass = 'size-6 text-ink'

function PrincipleIconMark({ name }: { name: PrincipleIcon }) {
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
    case 'material':
      return (
        <svg {...common}>
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9Z" />
          <path d="M12 12 4 7.5" />
          <path d="M12 12v9" />
          <path d="m12 12 8-4.5" />
        </svg>
      )
    case 'detail':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
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

export type StudioAboutModalProps = {
  open: boolean
  onClose: () => void
  onContact: () => void
}

export function StudioAboutModal({
  open,
  onClose,
  onContact,
}: StudioAboutModalProps) {
  const {
    studioEyebrow,
    studioHeading,
    studioBody,
    founderEyebrow,
    founderHeading,
    founderBody,
    quote,
    attribution,
    approachEyebrow,
    principles,
    cta,
    closeLabel,
    portrait,
  } = studioAbout

  return (
    <Dialog open={open} onClose={onClose} labelledBy={TITLE_ID}>
      <div className="relative flex h-full min-h-0 flex-col md:grid md:grid-cols-12">
        <button
          type="button"
          onClick={(event) => {
            event.currentTarget.closest('dialog')?.close()
          }}
          aria-label={closeLabel}
          className="absolute start-0 top-0 z-10 inline-flex min-h-(--tap-target-min) min-w-(--tap-target-min) items-center justify-center text-body-sm text-ink hover:text-accent"
        >
          ×
        </button>

        <figure className="order-1 shrink-0 overflow-hidden md:order-none md:col-span-4 md:col-start-9 md:row-start-1 md:h-full md:min-h-0 lg:col-span-5 lg:col-start-8">
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            className="aspect-[16/10] w-full object-cover object-[center_18%] md:aspect-auto md:h-full"
          />
        </figure>

        <div className="order-2 min-h-0 overflow-y-auto px-6 py-10 md:col-span-8 md:col-start-1 md:row-start-1 md:px-8 md:py-10 lg:col-span-7 lg:px-12 lg:py-14">
          <p className="text-eyebrow text-ink-muted">{studioEyebrow}</p>
          <h2 id={TITLE_ID} className="mt-4 text-display-lg">
            {studioHeading}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {studioBody.map((paragraph) => (
              <p key={paragraph} className="text-body text-ink-secondary">
                {splitNoma(paragraph)}
              </p>
            ))}
          </div>

          <div className="hairline-t border-border mt-10 pt-10">
            <p className="text-eyebrow text-ink-muted">{founderEyebrow}</p>
            <h3 className="mt-4 text-display-md">{founderHeading}</h3>
            <div className="mt-6 flex flex-col gap-4">
              {founderBody.map((paragraph) => (
                <p key={paragraph} className="text-body-sm text-ink-secondary">
                  {splitNoma(paragraph)}
                </p>
              ))}
            </div>
          </div>

          <blockquote className="mt-10">
            <span
              aria-hidden="true"
              className="block font-display text-display-xl leading-none text-ink-muted"
            >
              ”
            </span>
            <p className="mt-4 whitespace-pre-line text-display-sm font-normal">
              {quote}
            </p>
            <footer className="mt-6">
              <cite className="block text-body-sm not-italic">{attribution.name}</cite>
              <p className="mt-1 text-caption text-ink-muted">
                {splitNoma(attribution.role)}
              </p>
            </footer>
          </blockquote>

          <div className="hairline-t border-border mt-10 pt-10">
            <p className="text-eyebrow text-ink-muted">{approachEyebrow}</p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-8">
              {principles.map((item) => (
                <li
                  key={item.title}
                  className="hairline-b border-border min-w-0 py-5 last:border-b-0 md:border-b-0 md:py-0"
                >
                  <PrincipleIconMark name={item.icon} />
                  <p className="mt-4 text-body-sm">{item.title}</p>
                  <p className="mt-1 text-caption text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12">
            <Button type="button" variant="solid" onClick={onContact}>
              {cta.label}
              <span aria-hidden="true" className="motion-arrow ms-2">
                ←
              </span>
            </Button>
          </p>
        </div>
      </div>
    </Dialog>
  )
}
