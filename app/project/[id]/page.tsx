import { ProjectPage } from '@/source/pages/project-page'
import { getAllProjectIds, getProjectById } from '@/source/shared/api/fake-projects/fake-api'

interface IProjectPageProps {
  params: {
    id: string
  }
}

// Функция, которая возвращает список всех возможных id
export async function generateStaticParams() {
  const ids = await getAllProjectIds()
  return ids.map(id => ({
    id
  }))
}

const Page = async ({ params }: IProjectPageProps) => {
  const { id } = await params

  const project = await getProjectById(id)

  if (!project) return null

  return <ProjectPage project={project} />
}

export default Page
