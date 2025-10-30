'use client'

import { FC, useState } from 'react'
import styles from './consult-block.module.scss'
import clsx from 'clsx'
import { PhoneModal } from '@/source/widgets/phone-form-modal'
import { Modal } from '@/source/shared/ui/modalUI'

const ConsultBlock: FC = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div className={styles.container}>
        <div className={styles.block}>
            <div className={styles.priceBlock}>
                <b>790 000 ₽</b>
                <div className={styles.cross}></div>
                <b>12 платежей</b>
            </div>

            <span className={styles.text}>Остальное равными частями</span>

            <div className={styles.stripesBlock}>
                <div className={clsx(styles.stripe, {
                    [styles.active]: styles.active,
                })}></div>
                <div className={styles.stripe}></div>
            </div>

            <div className={styles.textBlock}>
                <span className={styles.text}>Сейчас <b>50%</b></span>
                <span className={styles.text}>Раз в месяц, 12 платежей</span>
            </div>

            <button onClick={() => setOpenModal(true)} className={styles.button} type='button'>Записаться на консультацию</button>

            
            <Modal onOpenChange={setOpenModal} open={openModal}>
              <PhoneModal info={'srd'} onClose={() => setOpenModal(false)} />
            </Modal>
        </div>
    </div>
  )
}

export default ConsultBlock