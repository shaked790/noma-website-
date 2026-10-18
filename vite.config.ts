import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { OutgoingHttpHeaders } from 'node:http'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

/*
 * Independently safe headers for this static SPA. Applied to Vite's own HTTP
 * servers (dev + preview). Production hosts that serve `dist/` must set the
 * same values; this file does not deploy them. HSTS is omitted: no HTTPS
 * production origin is configured. Resource CSP is omitted: JSON-LD is an
 * inline application/ld+json script and form errors use React style attrs.
 */
const securityHeaders: OutgoingHttpHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "frame-ancestors 'none'",
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { headers: securityHeaders },
  preview: { headers: securityHeaders },
})
