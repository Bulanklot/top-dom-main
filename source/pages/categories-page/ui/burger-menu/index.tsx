import styles from './styles/styles.module.scss'
import clsx from 'clsx'
import { EIconName } from '@/source/shared/ui/icons/type'
import { Icon } from '@/source/shared/ui/icons'

export const BurgerMenu = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.navPanel, styles.oneFloor)}>
        <p>Одноэтажные дома</p>
      </div>
      <div className={clsx(styles.navPanel, styles.twoFloor)}>
        <p>Двухэтажные дома</p>
      </div>
      <div className={clsx(styles.navPanel, styles.investments)}>
        <p>Инвестиции</p>
      </div>
      <div className={clsx(styles.navPanel, styles.stock)}>
        <p>Акции</p>
      </div>
      <div className={clsx(styles.navPanel, styles.oneFloor)}>
        <p>Одноэтажные дома</p>
      </div>
      <div className={clsx(styles.navPanel, styles.twoFloor)}>
        <p>Двухэтажные дома</p>
      </div>
      <div className={clsx(styles.navPanel, styles.investments)}>
        <p>Инвестиции</p>
      </div>
      <div className={clsx(styles.navPanel, styles.stock)}>
        <p>Акции</p>
      </div>
    </div>
  )
}
