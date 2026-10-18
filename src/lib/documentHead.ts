import { wordmark } from '@/content/navigation'
import { websiteJsonLd, type SeoDocument } from '@/content/seo'

const JSON_LD_ID = 'noma-seo-jsonld'

export function absoluteUrl(pathOrUrl: string, origin: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(pathOrUrl)) return pathOrUrl
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${origin}${path}`
}

export function applyDocumentHead(doc: SeoDocument, origin = window.location.origin) {
  document.title = doc.title

  upsertMeta('name', 'description', doc.description)
  upsertMeta('name', 'robots', doc.robots)

  const canonical = absoluteUrl(doc.canonicalPath, origin)
  upsertLink('canonical', canonical)

  upsertMeta('property', 'og:title', doc.title)
  upsertMeta('property', 'og:description', doc.description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:locale', 'he_IL')
  upsertMeta('property', 'og:site_name', wordmark)

  const imageUrl = doc.image ? absoluteUrl(doc.image.src, origin) : null
  upsertMeta('property', 'og:image', imageUrl)
  upsertMeta('property', 'og:image:alt', doc.image?.alt ?? null)

  upsertMeta('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
  upsertMeta('name', 'twitter:title', doc.title)
  upsertMeta('name', 'twitter:description', doc.description)
  upsertMeta('name', 'twitter:image', imageUrl)
  upsertMeta('name', 'twitter:image:alt', doc.image?.alt ?? null)

  upsertJsonLd(doc.jsonLd ? websiteJsonLd(origin) : null)
}

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string | null,
) {
  const nodes = [
    ...document.head.querySelectorAll(`meta[${attr}="${cssAttr(key)}"]`),
  ] as HTMLMetaElement[]

  if (!content) {
    for (const node of nodes) node.remove()
    return
  }

  const el = nodes[0] ?? document.createElement('meta')
  if (!nodes[0]) {
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
  for (const extra of nodes.slice(1)) extra.remove()
}

function upsertLink(rel: string, href: string) {
  const nodes = [
    ...document.head.querySelectorAll(`link[rel="${cssAttr(rel)}"]`),
  ] as HTMLLinkElement[]
  const el = nodes[0] ?? document.createElement('link')
  if (!nodes[0]) {
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
  for (const extra of nodes.slice(1)) extra.remove()
}

function upsertJsonLd(data: unknown | null) {
  const existing = document.getElementById(JSON_LD_ID)
  if (!data) {
    existing?.remove()
    return
  }
  const el =
    existing instanceof HTMLScriptElement
      ? existing
      : document.createElement('script')
  el.id = JSON_LD_ID
  el.type = 'application/ld+json'
  el.text = JSON.stringify(data)
  if (!existing) document.head.appendChild(el)
}

function cssAttr(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}
