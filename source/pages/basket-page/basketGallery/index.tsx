'use client'

import styles from './styles/styles.module.scss'
import { useEffect, useState } from 'react'
import { ProjectCard } from '@/source/pages/main-page/ui/card-ui'

export const LS_KEY = 'basketItems' // ключ в localStorage
export const EVT = 'basket:items'

type BasketItem = {
  id: string
  images: string[]
}

export const BasketGallery = () => {
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

    const onBasket = (e: Event) => {
      const next = (e as CustomEvent<BasketItem[]>).detail
      setItems(next || [])
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(EVT, onBasket)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(EVT, onBasket)
    }
  }, [])

  return (
    <div className={styles.container}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <ProjectCard
            key={`${item.id}-${index}`} // Уникальный ключ
            id={item.id}
            images={item.images}
            onBasket={true}
          />
        ))
      ) : (
        <p className={styles.comment}>Здесь будет дом вашей мечты</p>
      )}
    </div>
  )
}
