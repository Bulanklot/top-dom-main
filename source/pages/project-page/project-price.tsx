import { FC } from 'react'
import styles from './styles/styles.module.scss'
import { Icon } from '@/source/shared/ui/icons'
import { IconName } from '@/source/shared/ui/icons/type'

interface IProjectPriceProps {
  startPrice: number
  oldPrice?: number
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
          <strong className={styles.startPrice}>От {startPrice} ₽</strong>
          <span className={styles.oldPrice}>{oldPrice} ₽</span>
        </div>

        <div className={styles.discountContainer}>
          <Icon icon={IconName.ArrowDownAccent} className={styles.arrowDownAccent} />
          <span className={styles.discountPrice}>-{discountPrice} ₽</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectPrice