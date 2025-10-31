import { FC } from 'react'
import { GalleryUI } from '../main-page/ui/gallery'
import Constructor from './constructor'
import PriceDetails from './price-details'
import ProjectPrice from './project-price'
import ProjectSlider from './project-slider'
import styles from './styles/styles.module.scss'
import { ProjectsGalleryFeature } from '@/source/features/projects-gallery'

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
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <ProjectSlider images={project.images} />
        <ProjectPrice startPrice={19500000} oldPrice={20500000} discountPrice={500000} />
      </div>

      <div className={styles.accordionList}>
        <PriceDetails />
        <Constructor />
      </div>

      <ProjectsGalleryFeature/>
    </div>
  )
}
