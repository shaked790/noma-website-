import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { resolveSeoDocument } from '@/content/seo'
import { applyDocumentHead } from '@/lib/documentHead'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { ProjectsIndex } from '@/pages/ProjectsIndex'

function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function DocumentHead() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    applyDocumentHead(resolveSeoDocument(pathname))
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <DocumentHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
