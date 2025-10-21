'use client'
import styles from './styles/styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { BunnerSlideUI } from '@/source/pages/main-page/ui/swiper-slide-ui'
import { Autoplay, EffectCoverflow } from 'swiper/modules'

export const SwiperUI = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectCoverflow]}
      loop={true}
      effect="coverflow"
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
          slidesPerView: 1.4,
          spaceBetween: 26
        }
      }}
      className={styles.container}
    >
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        {' '}
        <BunnerSlideUI />
      </SwiperSlide>
    </Swiper>
  )
}
