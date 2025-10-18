import styles from './styles/styles.module.scss'
import { SwiperUI } from '@/source/pages/main-page/ui/title-swiper'
import { GalleryUI } from '@/source/pages/main-page/ui/gallery'
import { FooterUIMobile } from '@/source/widgets/footerUI-mobile'
export const MainPage = () => {
  return (
    <div className={styles.container}>
      <SwiperUI />
      <GalleryUI />
      <FooterUIMobile />
    </div>
  )
}
