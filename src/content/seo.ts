import { hero } from '@/content/home'
import { wordmark } from '@/content/navigation'
import { notFound } from '@/content/notFound'
import {
  featuredProjectsIntro,
  getProjectBySlug,
  projectPath,
  projects,
  type Project,
} from '@/content/projects'

/*
 * Route metadata is assembled from copy that already ships in content modules.
 * Do not add marketing claims, contact facts, or a guessed production origin here.
 */

export const siteTitle = 'NOMA — סטודיו לעיצוב פנים'

export type SeoImage = {
  src: string
  alt: string
}

export type SeoDocument = {
  title: string
  description: string
  canonicalPath: string
  robots: 'index, follow' | 'noindex, follow'
  image: SeoImage | null
  jsonLd: boolean
}

export function canonicalPath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const stripped = pathname.replace(/\/+$/, '')
  return stripped || '/'
}

export function resolveSeoDocument(pathname: string): SeoDocument {
  const path = canonicalPath(pathname)

  if (path === '/') {
    return {
      title: siteTitle,
      description: hero.supporting,
      canonicalPath: '/',
      robots: 'index, follow',
      image: hero.slides[0] ?? null,
      jsonLd: true,
    }
  }

  if (path === '/projects') {
    return listingDocument()
  }

  const slugMatch = path.match(/^\/projects\/([^/]+)$/)
  if (slugMatch) {
    const project = getProjectBySlug(slugMatch[1])
    if (project) return projectDocument(project)
    /*
     * Invalid slugs client-replace to the listing. Use listing metadata so the
     * brief unmatched URL does not look like a distinct indexable page.
     */
    return listingDocument()
  }

  return {
    title: `${wordmark} — ${notFound.title}`,
    description: notFound.body,
    canonicalPath: path,
    robots: 'noindex, follow',
    image: null,
    jsonLd: false,
  }
}

function listingDocument(): SeoDocument {
  return {
    title: `${wordmark} — פרויקטים`,
    description: `${featuredProjectsIntro.heading}: ${projects.map((project) => project.title).join(', ')}.`,
    canonicalPath: '/projects',
    robots: 'index, follow',
    image: projects[0]?.heroImage ?? null,
    jsonLd: false,
  }
}

function projectDocument(project: Project): SeoDocument {
  return {
    title: `${wordmark} — ${project.title}`,
    description: project.shortDescription,
    canonicalPath: projectPath(project.slug),
    robots: 'index, follow',
    image: project.heroImage,
    jsonLd: false,
  }
}

export function websiteJsonLd(origin: string) {
  const url = `${origin}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        name: wordmark,
        alternateName: siteTitle,
        url,
        inLanguage: 'he',
      },
      {
        '@type': 'Organization',
        '@id': `${url}#organization`,
        name: wordmark,
        url,
      },
    ],
  }
}
