'use client'
import styles from './styles/styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import basketIcon from "@/public/ui-icons/Корзинка.svg";
import homeImage from '@/public/test-vilages-image/home.png'
import testImage from '@/public/test-vilages-image/3.png'
import testImage2 from '@/public/test-vilages-image/4.png'
import testImage3 from '@/public/test-vilages-image/Фото дома.png'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

export const VillageCard = () => {
  return (
    <div className={styles.container}>
      <Swiper className={styles.swiper} modules={[Pagination]} pagination={{ clickable: false }} loop>
        <SwiperSlide>
          <Image src={homeImage} alt="" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImage} alt="" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImage2} alt="" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImage3} alt="" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImage} alt="" unoptimized />
        </SwiperSlide>
      </Swiper>
      <div className={styles.optionsWrapper}>
        <p>Хит продаж</p>
        <Image src={basketIcon} alt="" unoptimized />
      </div>
      <Link href="/project">
        <div className={styles.contentWrapper}>
          <p>От 11 786 860 ₽</p>
          <p>Площадь дома: 172 м²</p>
        </div>
      </Link>
    </div>
  )
}
