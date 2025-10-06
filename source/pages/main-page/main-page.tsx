import styles from './styles/styles.module.scss'
import { SwiperUI } from '@/source/pages/main-page/ui/title-swiper'
import { GalleryUI } from '@/source/pages/main-page/ui/gallery'
export const MainPage = () => {
  return (
    <div className={styles.container}>
      <SwiperUI />
      <GalleryUI />
    </div>
  )
}
