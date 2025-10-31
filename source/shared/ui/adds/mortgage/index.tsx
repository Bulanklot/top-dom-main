import { CustomButton } from '@/source/shared/ui/button'
import styles from './styles/styles.module.scss'


export const MortgageAddsBunner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Ипотека от 5%</h3>
        <p className={styles.description}>Эскроу-счет без комиссии</p>
      </div>
      <CustomButton className={styles.buttonWrapper} >узнать подробнее</CustomButton>
    </div>
  )
}
