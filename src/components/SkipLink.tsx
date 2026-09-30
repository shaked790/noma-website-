/*
 * Hidden until focused. Positioned with `start-*` so it lands in the top-right
 * corner in RTL without any mirroring override, and inverted for high contrast
 * against the ivory page surface.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-body-sm focus:text-ink-inverse"
    >
      דילוג לתוכן הראשי
    </a>
  )
}
