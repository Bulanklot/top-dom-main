'use client'
import { getAllProjects, IProject } from '@/source/shared/api/fake-projects/fake-api'
import styles from './styles/styles.module.scss'
import { ProjectCard } from '@/source/pages/main-page/ui/card-ui'
import { MortgageAddsBunner } from '@/source/shared/ui/adds/mortgage'
import { useEffect, useState } from 'react'

type TGalleryProps = {
  projects: IProject[]
}
export const GalleryUI: React.FC<TGalleryProps> = ({ projects }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  const bannerBefore = (index: number, isDesktop: boolean) => {
    console.log(index)
    if (isDesktop) {
      if (index === 4) return true
      if (index > 4 && (index - 4) % 8 === 0) return true
    } else {
      if (index === 2) return true
      if (index > 2 && (index - 2) % 4 === 0) return true
    }
    return false
  }
  const buildGallery = (cards: IProject[], isDesktop: boolean) => {
    const result: React.ReactNode[] = []
    cards.forEach((project, index) => {
      if (bannerBefore(index, isDesktop)) {
        result.push(<MortgageAddsBunner key={`banner-${index}`} />)
      }
      result.push(<ProjectCard key={project.id} id={project.id} images={project.images} />)
    })
    return result
  }
  const elements = buildGallery(projects, isDesktop)
  console.log(projects)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Подобрали для вас</h2>
      <section className={styles.cardSection}>{elements}</section>
    </div>
  )
}
