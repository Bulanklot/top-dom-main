import styles from './styles/styles.module.scss'
import { VillageCard } from '@/source/pages/main-page/ui/card-ui'

export const GalleryUI = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Подобрали для вас</h2>
      <section className={styles.cardSection}>
        <VillageCard/>
        <VillageCard />
        <VillageCard/>
        <VillageCard/>
        <div className={styles.addsBunner}></div>
      </section>
    </div>
  )
}
