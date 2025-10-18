'use client'
import styles from './styles/styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import basketIcon from '@/public/ui-icons/Корзинка.svg'
import homeImage from '@/public/test-vilages-image/home.png'
import testImage from '@/public/test-vilages-image/3.png'
import testImage2 from '@/public/test-vilages-image/4.png'
import testImage3 from '@/public/test-vilages-image/Фото дома.png'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import { HTMLAttributes, useEffect, useState } from 'react'
import clsx from 'clsx'
import { EVT, LS_KEY } from '@/source/pages/basket-page/basketGallery'

export type TVillageProps = HTMLAttributes<HTMLDivElement> & {
  onBasket?: boolean
}
export const VillageCard = ({ onBasket }: TVillageProps) => {
  const [count, setCount] = useState(0)
  // это будет огромный технический долг, с виджетом корзины
  useEffect(() => {
    const read = () => {
      const n = Number(localStorage.getItem(LS_KEY) || 0)
      setCount(Number.isFinite(n) && n > 0 ? n : 0)
    }
    read()

    const onStorage = (e: StorageEvent) => {
      if (e.key === LS_KEY) read()
    }
    const onLocal = (e: Event) => {
      const next = (e as CustomEvent<number>).detail
      setCount(Number(next) || 0)
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(EVT, onLocal)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(EVT, onLocal)
    }
  }, [])

  const setAndBroadcast = (next: number) => {
    localStorage.setItem(LS_KEY, String(next))
    window.dispatchEvent(new CustomEvent(EVT, { detail: next }))
    setCount(next)
  }

  // ADD внутри карточки
  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation() // чтобы <Link> не сработал
    setAndBroadcast(count + 1)
  }

  // REMOVE внутри карточки
  const removeFromBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setAndBroadcast(Math.max(0, count - 1))
  }

  return (
    <Link href="/project">
      <div className={styles.container}>
        <Swiper className={styles.swiper} modules={[Pagination]} pagination={{ clickable: false }} loop>
          <SwiperSlide>
            <Image className={styles.image} src={homeImage} alt="" unoptimized />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={styles.image} src={testImage} alt="" unoptimized />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={styles.image} src={testImage2} alt="" unoptimized />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={styles.image} src={testImage3} alt="" unoptimized />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={styles.image} src={testImage} alt="" unoptimized />
          </SwiperSlide>
        </Swiper>
        <div className={styles.optionsWrapper}>
          <p>Хит продаж</p>
          <button
            disabled={onBasket}
            onClick={e => addToBasket(e)}
            className={clsx(styles.basketButton, onBasket && styles.disabled)}
          >
            <Image className={styles.basketIcon}  src={basketIcon} alt="" unoptimized />
          </button>
        </div>
        {onBasket && <button className={styles.deleteButton} onClick={e => removeFromBasket(e)}></button>}
        <div className={styles.contentWrapper}>
          <p>От 11 786 860 ₽</p>
          <p>Площадь дома: 172 м²</p>
        </div>
      </div>
    </Link>
  )
}
