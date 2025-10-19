import { FC } from 'react'
import styles from './styles/styles.module.scss'
import ProjectSlider from './project-slider'
import ProjectPrice from './project-price'
import PriceDetails from './price-details'
import Constructor from './constructor'
import data from '@/source/shared/api/fake-projects/data.json'
import { GalleryUI } from '../main-page/ui/gallery'

type Project = {
  id: string
  name: string
  images: string[]
}

interface IProjectPageProps {
  project: Project
}

export const ProjectPage: FC<IProjectPageProps> = props => {
  const { project } = props

  return (
    <>
      <ProjectSlider images={project.images} />
      <ProjectPrice startPrice={19500000} oldPrice={20500000} discountPrice={500000} />
      <PriceDetails />
      <Constructor />

      <GalleryUI />
    </>
  )
}
