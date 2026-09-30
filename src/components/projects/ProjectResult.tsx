import { ProjectNote } from '@/components/projects/ProjectNote'

export function ProjectResult({ children }: { children: string }) {
  return <ProjectNote heading="התוצאה">{children}</ProjectNote>
}
