/*
 * PLACEHOLDER CONTENT — replace when the real site structure exists.
 *
 * Kept in one module so the Navbar and Footer stay presentational and the demo
 * labels, hrefs and contact details can be swapped without touching components.
 * Contact values use the reserved `.example` domain and a 000 number so they can
 * never be mistaken for real details.
 */

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'סטודיו', href: '#studio' },
  { label: 'פרויקטים', href: '/#projects' },
  { label: 'תהליך', href: '#process' },
  { label: 'יצירת קשר', href: '#contact' },
]

export const primaryCta = {
  label: 'שיחת היכרות',
  href: '#contact',
}

export const contactDetails = {
  email: 'hello@noma.example',
  /*
   * PLACEHOLDER — not a real studio line. WhatsApp and tel: both read this
   * field, so replacing it later is a one-place change.
   */
  phone: '+972 3 000 0000',
}

export function whatsappUrl(message: string) {
  const digits = contactDetails.phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export const wordmark = 'NOMA'
export const wordmarkTagline = 'עיצוב פנים'
