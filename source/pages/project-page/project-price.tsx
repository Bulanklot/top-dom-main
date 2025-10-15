'use client'

import { Icon } from '@/source/shared/ui/icons'
import { EIconName } from '@/source/shared/ui/icons/type'
import { FC } from 'react'
import styles from './styles/styles.module.scss'
import { FormattedPrice } from '@/source/shared/ui/formatted-price'

interface IProjectPriceProps {
  startPrice: number
  oldPrice: number
  discountPrice?: number
}

const ProjectPrice: FC<IProjectPriceProps> = props => {
  const { startPrice, oldPrice, discountPrice = 500000 } = props

  return (
    <div className={styles.priceCard}>
      <span className={styles.square}>
        Площадь дома: 172 м<sup>2</sup>
      </span>
      <div className={styles.priceContainer}>
        <div className={styles.priceCol}>
          <strong className={styles.startPrice}>От <FormattedPrice value={startPrice} /> ₽</strong>
          <span className={styles.oldPrice}><FormattedPrice value={oldPrice} /> ₽</span>
        </div>

        <div className={styles.discountContainer}>
          <Icon icon={EIconName.ArrowDownAccent} className={styles.arrowDownAccent} />
          <span className={styles.discountPrice}>-<FormattedPrice value={discountPrice} /> ₽</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectPrice