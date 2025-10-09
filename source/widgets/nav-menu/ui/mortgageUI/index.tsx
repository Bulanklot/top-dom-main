'use client'

import styles from './styles/styles.module.scss'
import { useForm } from 'react-hook-form'
import { MobileRectangle } from '@/source/shared/ui/icon/ui/mobile-rectangle'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/source/shared/ui/modal'

export const MortgageUi: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { register, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      mortgage: 'Семейная 6%'
    }
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <MobileRectangle />
      <p className={styles.title}>Выберите свою ипотеку</p>
      <fieldset className={styles.fieldset}>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            value="Семейная 6%"
            {...register('mortgage')}
            // checked={paymentFrequency === 21}
          />
          Семейная 6%
        </label>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            value="Дальневосточная 2%"
            {...register('mortgage')}
            // checked={paymentFrequency === 23}
          />
          Дальневосточная 2%
        </label>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            value="Сельская 3%"
            {...register('mortgage')}
            // checked={paymentFrequency === 25}
          />
          Сельская 3%
        </label>
        <label className={styles.radioLabel}>
          <input className={styles.radioInput} type="radio" value="Рыночная от 15%" {...register('mortgage')} />
          Рыночная от 15%
        </label>
        <label className={styles.radioLabel}>
          <input className={styles.radioInput} type="radio" value="Военная" {...register('mortgage')} />
          Военная
        </label>
        <label className={styles.radioLabel}>
          <input className={styles.radioInput} type="radio" value="IT 6%" {...register('mortgage')} />
          IT 6%
        </label>
      </fieldset>
      <button
        onClick={() => {
          setOpenModal(!openModal)
        }}
        type="submit"
        className={styles.button}
      >
        Одобрить ипотеку
      </button>
      <Modal onOpenChange={setOpenModal} open={openModal}>
        <div>
          <div>Здесь будет модальное окно с номером телефона</div>
        </div>
      </Modal>
    </form>
  )
}
