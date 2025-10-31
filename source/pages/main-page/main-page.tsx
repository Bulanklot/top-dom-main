import styles from './styles/styles.module.scss'
import { GalleryUI } from '@/source/pages/main-page/ui/gallery'
import { FooterUIMobile } from '@/source/widgets/footerUI-mobile'
import { TitleSwiper } from '@/source/features/title-swiper'
import {  ProjectsGalleryFeature } from '@/source/features/projects-gallery'
export const MainPage = () => {
  return (
    <div className={styles.container}>
      <TitleSwiper />
      <ProjectsGalleryFeature />
      <FooterUIMobile />
    </div>
  )
}
