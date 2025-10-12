'use client'

import { FC, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
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

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <Image src={image} width={200} height={200} alt="" className={styles.sliderImg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.thumbsSwiper}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`thumb-${image}-${index}`}>
              <Image src={image} width={50} height={50} alt="" className={styles.sliderImg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProjectSlider
