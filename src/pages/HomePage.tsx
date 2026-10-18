import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
import { Footer, Navbar, SkipLink } from '@/components'
import { ContactSection } from '@/components/home/ContactSection'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Hero } from '@/components/home/Hero'
import { ProcessSection } from '@/components/home/ProcessSection'
import { StudioSection } from '@/components/home/StudioSection'
import { scrollToHash } from '@/lib/scrollToHash'

export function HomePage() {
  const { hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) return
    scrollToHash(hash)
  }, [hash])

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
