'use client'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './styles/styles.module.scss'
import { Icon } from '@/source/shared/ui/icons'
import { MortgageUi } from '@/source/widgets/nav-menu/ui/mortgageUI'
import { animate, motion, PanInfo, useMotionValue } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'
import { EIconName } from '@/source/shared/ui/icons/type'
import Link from 'next/link'

export const NavMenuUI = () => {
  const [open, setOpen] = useState(false)

  const y = useMotionValue(0)

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    onOpenChange: (v: boolean) => void
  ) => {
    if (info.offset.y > 100) {
      animate(y, 500, { duration: 0.3 }).then(() => setOpen(false))
      setTimeout(() => onOpenChange(false), 200)
    } else {
      animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 })
    }
  }
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link href="/">
          <Icon icon={EIconName.Home} />
        </Link>
        <Link href="/categories">
          <Icon icon={EIconName.Burger} />
        </Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className={clsx(styles.button, open && styles.buttonActive)}>
              <span>Ипотека</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Title></Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <Dialog.Content asChild className={styles.dialogContent}>
              <motion.div
                style={{ y }}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) =>
                  handleDragEnd(e, info, () => {
                    setOpen(false)
                  })
                }
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
              >
                <div className={styles.sheetHandle} />
                <MortgageUi />
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <Icon icon={EIconName.Basket} />
        <Icon icon={EIconName.Person} />
      </nav>
    </div>
  )
}
