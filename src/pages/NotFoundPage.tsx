import { Footer, Navbar, SkipLink } from '@/components'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { notFound } from '@/content/notFound'

export function NotFoundPage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Section space="md" tone="surface">
          <Container size="narrow">
            <h1 className="text-display-md">{notFound.title}</h1>
            <p className="mt-4 max-w-measure text-body text-ink-secondary">
              {notFound.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Button href={notFound.home.href} variant="solid" size="md">
                {notFound.home.label}
              </Button>
              <Button href={notFound.projects.href} variant="outline" size="sm">
                {notFound.projects.label}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
