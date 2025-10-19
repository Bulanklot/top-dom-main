import { ProjectPage } from '@/source/pages/project-page'
import { getProjectById } from '@/source/shared/api/fake-projects/fake-api'

interface IProjectPageProps {
  params: {
    id: string
  }
}

const Page = async ({ params }: IProjectPageProps) => {
  const { id } = await params

  const project = await getProjectById(id)

  if (!project) return null

  return <ProjectPage project={project} />
}

export default Page
