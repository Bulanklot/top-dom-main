import data from './data.json'

interface IProject {
  id: string
  name: string
  images: string[]
}

export async function getProjectById(id: string): Promise<IProject | null> {
  const project = data.projects.find((p: IProject) => p.id === id)
  return project || null
}

export async function getAllProjects(): Promise<IProject[]> {
  return data.projects;
}

export async function getAllProjectIds(): Promise<string[]> {
  return data.projects.map((project: IProject) => project.id);
}