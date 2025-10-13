import styles from './styles/styles.module.scss'
import { ExitButton } from '../../exit-button'
import { ICONS } from '../../icons/icons'
import { Icon } from '../../icons'
import { IconName } from '../../icons/type'

export const AcceptModal = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Icon icon={IconName.Logo} />
        <ExitButton onClose={onClose} />
      </div>
      <p className={styles.description}>
        Команда ТопДом благодарит <span>Вас за доверие и интерес</span> к нашей компании!
      </p>
      <p className={styles.info}>Наш менеджер свяжется с вами в ближайшее время!</p>
    </div>
  )
}
