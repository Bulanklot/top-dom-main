'use client'
import styles from './styles/styles.module.scss'
import React from 'react'
import { Icon } from '@/source/shared/ui/icons'
import { EIconName } from '@/source/shared/ui/icons/type'
import { NavMenuDesktop } from '@/source/widgets/nav-menu/nav-menuDesktop'
import { PhoneModal } from '@/source/widgets/phone-form-modal'
import { Modal } from '@/source/shared/ui/modalUI'
import Link from 'next/link'

export const HeaderUI: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  return (
    <header className={styles.container}>
      <Link className={styles.logo} href="/"><Icon icon={EIconName.Logo} /></Link>
      <NavMenuDesktop />
      <div className={styles.desktopWrapper}>
        <div className={styles.contacts}>
          <button
            onClick={() => {
              setOpenModal(true)
            }}
            className={styles.button}
          >
            <p>Заказать звонок</p>
          </button>
          <a href="tel:+74951839288">+7 (495) 183 92 88</a>
        </div>
        <div className={styles.iconsContainer}>
          <a href="https://t.me/topdom_rf" target="_blank" rel="noopener noreferrer">
            <div className={styles.tgIcon}></div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/79274534893?text=Здравствуйте! Хочу получить консультацию"
          >
            <div className={styles.whatsIcon}></div>
          </a>
          <a href="https://youtube.com/@TOPDOM_RF" target="_blank" rel="noopener noreferrer">
            <div className={styles.youtubeIcon}></div>
          </a>
          <a href="https://vk.com/topdomrf" target="_blank" rel="noopener noreferrer">
            <div className={styles.vkIcon}></div>
          </a>
        </div>
      </div>
      <Modal onOpenChange={setOpenModal} open={openModal}>
        <PhoneModal info={'srd'} onClose={() => setOpenModal(false)} />
      </Modal>
    </header>
  )
}
