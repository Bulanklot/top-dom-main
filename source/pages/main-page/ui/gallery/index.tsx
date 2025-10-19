import { getAllProjects } from '@/source/shared/api/fake-projects/fake-api'
import styles from './styles/styles.module.scss'
import { ProjectCard } from '@/source/pages/main-page/ui/card-ui'

export const GalleryUI = async () => {
  const projects = await getAllProjects()
  console.log(projects)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Подобрали для вас</h2>
      <section className={styles.cardSection}>
        {/* <ProjectCard />
        <ProjectCard />
        <div className={styles.addsBunner}></div> */}
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            images={project.images}
            onBasket={false} // или по условию
          />
        ))}
      </section>
    </div>
  )
}
