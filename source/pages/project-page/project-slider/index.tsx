'use client'

import { FC, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import styles from '../styles/styles.module.scss'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface IProjectSliderProps {
  images: string[]
}

const ProjectSlider: FC<IProjectSliderProps> = props => {
  const { images } = props

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Ссылка на проект скопирована')
  }

  return (
    <div className={styles.sliderContainer}>
    <div className={styles.thumbsSwiper}>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={17}
        slidesPerView={7}
        direction="vertical"
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress
        freeMode
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${image}-${index}`}>
            <Image src={image} width={74} height={74} alt="" className={styles.thumbImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false 
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        loop
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide className={styles.slide} key={`${image}-${index}`}>
            <Image src={image} width={200} height={200} alt="" className={styles.sliderImg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className={styles.backButton} onClick={() => window.history.back()}></button>

      <button className={styles.shareButton} onClick={handleCopy}></button>
    </div>
  )
}

export default ProjectSlider
