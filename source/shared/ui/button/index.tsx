import styles from './styles/styles.module.scss'
import { Icon } from '@/source/shared/ui/icons'
import { EIconName } from '@/source/shared/ui/icons/type'
import clsx from 'clsx'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  children?: React.ReactNode
}

export const CustomButton: React.FC<TButtonProps> = ({ text, className, children, ...props }) => {
  return (
    <button className={clsx(styles.container, className)} {...props}>
      <span>
        {text}
        {children}
      </span>
      <Icon icon={EIconName.ArrowRight} />
    </button>
  )
}
