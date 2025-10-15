'use client'

import styles from './styles/styles.module.scss'
import { useEffect, useState } from 'react'
import { VillageCard } from '@/source/pages/main-page/ui/card-ui'

export const LS_KEY = 'basketCount' // ключ в localStorage
export const EVT = 'basket:count'

export const BasketGallery = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const read = () => {
      const n = Number(localStorage.getItem(LS_KEY) || 0)
      setCount(Number.isFinite(n) && n > 0 ? n : 0)
    }

    read()

    // Обновления из ДРУГИХ вкладок
    const onStorage = (e: StorageEvent) => {
      if (e.key === LS_KEY) read()
    }

    // Обновления в ЭТОЙ же вкладке (после добавления/удаления)
    const onBasket = (e: Event) => {
      const next = (e as CustomEvent<number>).detail
      setCount(Number(next) || 0)
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
      {count > 0 ? (
        Array.from({ length: count }).map((_, index) => <VillageCard key={index} onBasket />)
      ) : (
        <p className={styles.comment}>Здесь будет дом вашей мечты</p>
      )}
    </div>
  )
}
