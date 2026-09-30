import { Footer, Navbar, SkipLink } from '@/components'
import { ContactSection } from '@/components/home/ContactSection'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Hero } from '@/components/home/Hero'
import { ProcessSection } from '@/components/home/ProcessSection'
import { StudioSection } from '@/components/home/StudioSection'

export function HomePage() {
  return (
    <>
      <SkipLink />
      <div className="relative">
        <Navbar overlay />
        <main id="main">
          <Hero />
          <StudioSection />
          <FeaturedProjects />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  )
}
