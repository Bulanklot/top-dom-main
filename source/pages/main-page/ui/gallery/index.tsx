import { getAllProjects } from '@/source/shared/api/fake-projects/fake-api'
import styles from './styles/styles.module.scss'
import { ProjectCard } from '@/source/pages/main-page/ui/card-ui'

export const GalleryUI = async () => {
  const projects = await getAllProjects();
  console.log(projects)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Подобрали для вас</h2>
      <section className={styles.cardSection}>

          {projects.flatMap((project, index) => {
              const elements = [
                  <ProjectCard
                      key={project.id}
                      id={project.id}
                      images={project.images}
                      onBasket={false}
                  />
              ]

              // после 2-го элемента (index === 1)
              if (index === 1) {
                  elements.push(
                      <div key="banner-1" className={styles.addsBunner}>
                          {/* Твой первый баннер */}
                      </div>
                  )
              }

              // после 4-го элемента (index === 3)
              if (index === 5) {
                  elements.push(
                      <div key="banner-2" className={styles.addsBunner}>
                          {/* Второй баннер */}
                      </div>
                  )
              }

              return elements
          })}
      </section>
    </div>
  )
}
