'use client'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './styles/styles.module.scss'
import { Icon } from '@/source/shared/ui/icons'
import { MortgageUi } from '@/source/widgets/nav-menu/ui/mortgageUI'
import { motion, PanInfo } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'
import { EIconName } from '@/source/shared/ui/icons/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavMenuDesktop = () => {
  const pathname = usePathname()
  // Анимация ипотеки
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link href="/">
          <Icon
            icon={EIconName.Home}
            id={'desktop'}
            className={clsx(styles.nav, pathname === '/' && styles.activeNav)}
          />
        </Link>
        <Link href="/categories">
          <Icon
            id={'desktop'}
            icon={EIconName.Burger}
            className={clsx(styles.nave, pathname === '/categories' && styles.activeNav)}
          />
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
                drag="y"
                dragConstraints={{ bottom: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info: PanInfo) => {
                  if (info.offset.y < -80) setOpen(false)
                }}
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
              >
                <div className={styles.sheetHandle} />
                <MortgageUi />
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <Link href="/basket">
          <Icon
            id={'desktop'}
            icon={EIconName.Basket}
            className={clsx(styles.nav, pathname === '/basket' && styles.activeNav)}
          />
        </Link>
        <Icon icon={EIconName.Person} />
      </nav>
    </div>
  )
}
