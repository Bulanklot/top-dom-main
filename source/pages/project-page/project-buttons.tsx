'use client'

import { FC, useState } from 'react'
import styles from './styles/styles.module.scss'
import { Modal } from '@/source/shared/ui/modalUI'
import { PriceDetailsModal } from '@/source/widgets/price-detail-form-modal'

const ProjectButtons: FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={() => {
          setOpenModal(!openModal)
        }}
        type="button"
        className={styles.greenButton}
      >
        Рассчитать
      </button>

      <Modal onOpenChange={setOpenModal} open={openModal}>
        <PriceDetailsModal onClose={() => setOpenModal(false)} constructor={null} />
      </Modal>
    </div>
  )
}

export default ProjectButtons
