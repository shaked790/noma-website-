export function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) return false
  const el = document.getElementById(id)
  if (!el) return false
  const top = el.getBoundingClientRect().top + window.scrollY
  const html = document.documentElement
  const previous = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, top)
  html.style.scrollBehavior = previous
  return true
}
