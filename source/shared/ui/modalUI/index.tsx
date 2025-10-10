import styles from './styles/style.module.scss'
import { typeModalProps } from '@/source/shared/ui/modalUI/types/types'
import * as Dialog from '@radix-ui/react-dialog'

export const Modal = (props: typeModalProps) => {
  const { open, onOpenChange, children } = props
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}></Dialog.Overlay>
        <Dialog.Content aria-describedby={undefined} className={styles.modal}>
          <Dialog.Title></Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
