import { Container } from '@/components/Container'

export function ProjectNote({
  heading,
  children,
}: {
  heading: string
  children: string
}) {
  return (
    <Container size="narrow" className="py-12 lg:py-16">
      <h2 className="text-display-sm">{heading}</h2>
      <p className="mt-4 text-body text-ink-secondary">{children}</p>
    </Container>
  )
}
