import { Container } from './Container'
import { footer } from '@/content/footer'
import { contact } from '@/content/home'
import {
  contactDetails,
  navItems,
  whatsappUrl,
  wordmark,
  wordmarkTagline,
  type NavItem,
} from '@/content/navigation'
import { projectPath, projects } from '@/content/projects'
import { cn } from '@/lib/cn'

const linkClass =
  'flex min-h-(--tap-target-min) items-center text-body-sm text-ink-secondary transition-colors duration-(--duration-fast) ease-out hover:text-accent'

function splitMarker(text: string, marker: string) {
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

export type FooterProps = {
  items?: NavItem[]
  className?: string
}

export function Footer({ items = navItems, className }: FooterProps) {
  const year = new Date().getFullYear()
  const navLinks = [{ label: footer.home.label, href: footer.home.href }, ...items]

  return (
    <footer className={cn('hairline-t border-border bg-surface text-ink', className)}>
      <Container size="wide" className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
          <div className="min-w-0 lg:pe-10">
            <p className="font-display text-display-sm tracking-widest">
              <span className="ltr-isolate">{wordmark}</span>
            </p>
            <p className="mt-2 text-eyebrow text-ink-muted">{wordmarkTagline}</p>
            <p className="mt-4 max-w-xs text-caption text-ink-secondary">
              {footer.brand.description}
            </p>
          </div>

          <nav
            aria-label={footer.navLabel}
            className="hairline-t border-border pt-8 min-w-0 lg:border-t-0 lg:hairline-e lg:border-border lg:px-10 lg:pt-0 lg:ps-10"
          >
            <h2 className="font-body text-eyebrow text-ink-muted">{footer.navLabel}</h2>
            <ul className="mt-3 flex flex-col">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label={footer.projectsLabel}
            className="hairline-t border-border pt-8 min-w-0 lg:border-t-0 lg:hairline-e lg:border-border lg:px-10 lg:pt-0"
          >
            <h2 className="font-body text-eyebrow text-ink-muted">
              {footer.projectsLabel}
            </h2>
            <ul className="mt-3 flex flex-col">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a href={projectPath(project.slug)} className={linkClass}>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hairline-t border-border pt-8 min-w-0 lg:border-t-0 lg:pt-0 lg:ps-10">
            <h2 className="font-body text-eyebrow text-ink-muted">
              {footer.contactLabel}
            </h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
                  className={linkClass}
                >
                  <span className="ltr-isolate">{contactDetails.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className={linkClass}>
                  <span className="ltr-isolate">{contactDetails.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(contact.whatsappMessage)}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {splitMarker(footer.whatsappLabel, 'WhatsApp')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="hairline-t border-border mt-12 flex flex-wrap items-center justify-between gap-3 pt-6 text-caption text-ink-secondary">
          <span>
            <span className="ltr-isolate">
              © {year} {wordmark}
            </span>
            <span> · {footer.copyright}</span>
          </span>
        </p>
      </Container>
    </footer>
  )
}
