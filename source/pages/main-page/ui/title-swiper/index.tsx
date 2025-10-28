'use client'
import styles from './styles/styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { BannerSlideUI, TBanner } from '@/source/pages/main-page/ui/banner-slide-ui'
import { Autoplay, EffectCoverflow } from 'swiper/modules'

type TSwiperProps = {
  banners: TBanner[]
}
export const SwiperUI: React.FC<TSwiperProps> = props => {
  const MIN_LOOP_SLIDES = 8;
  const extended = Array.from(
    { length: Math.max(MIN_LOOP_SLIDES, props.banners.length) },
    (_, i) => props.banners[i % props.banners.length]
  )
  return (
    <Swiper
      modules={[Autoplay,EffectCoverflow]}
      effect="coverflow"
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
        scale: 0.95
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
        },
        1024: {
          slidesPerView: 1.6,
          spaceBetween: 26
        }
      }}
      className={styles.container}
    >
      {extended.map((banner,index) => {
        return (
          <SwiperSlide key={index}>
            <BannerSlideUI banner={banner} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
