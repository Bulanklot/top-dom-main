'use client'
import styles from './styles/styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import basketIcon from '@/public/ui-icons/Корзинка.svg'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import { HTMLAttributes, useEffect, useState } from 'react'
import clsx from 'clsx'
import { EVT, LS_KEY } from '@/source/pages/basket-page/basketGallery'

type BasketItem = {
  id: string
  images: string[]
}

export type TVillageProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  images: string[]
  onBasket?: boolean
}

export const ProjectCard = ({ onBasket, id, images }: TVillageProps) => {
  const [items, setItems] = useState<BasketItem[]>([])

  useEffect(() => {
    const read = () => {
      try {
        const stored = localStorage.getItem(LS_KEY)
        const parsed: BasketItem[] = stored ? JSON.parse(stored) : []
        setItems(parsed)
      } catch (e) {
        console.error('Failed to parse basket items from localStorage', e)
        setItems([])
      }
    }

    read()

    const onStorage = (e: StorageEvent) => {
      if (e.key === LS_KEY) read()
    }

    const onLocal = (e: Event) => {
      const next = (e as CustomEvent<BasketItem[]>).detail
      setItems(next || [])
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(EVT, onLocal)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(EVT, onLocal)
    }
  }, [])

  const setAndBroadcast = (nextItems: BasketItem[]) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(nextItems))
      window.dispatchEvent(new CustomEvent(EVT, { detail: nextItems }))
    } catch (e) {
      console.error('Failed to save basket items to localStorage', e)
    }
  }

  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const newItems = [...items, { id, images }]
    setAndBroadcast(newItems)
  }

  const removeFromBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    // Удаляем первый попавшийся элемент с таким id
    const index = items.findIndex(item => item.id === id)
    if (index !== -1) {
      const newItems = [...items]
      newItems.splice(index, 1)
      setAndBroadcast(newItems)
    }
  }

  return (
    <Link href={`/project/${id}`}>
      <div className={styles.container}>
        <Swiper className={styles.swiper} modules={[Pagination]} pagination={{ clickable: false }} loop>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                className={styles.image}
                src={img}
                alt={`Project ${id} image ${idx}`}
                width={171}
                height={135}
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.optionsWrapper}>
          <p>Хит продаж</p>
          <button
            disabled={onBasket}
            onClick={e => addToBasket(e)}
            className={clsx(styles.basketButton, onBasket && styles.disabled)}
          >
            <Image className={styles.basketIcon} src={basketIcon} alt="" unoptimized />
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
