import { IFormValues } from '@/source/pages/project-page/constructor'
import { ExitButton } from '@/source/shared/ui/exit-button'
import { Icon } from '@/source/shared/ui/icons'
import { EIconName } from '@/source/shared/ui/icons/type'
import { AcceptModal } from '@/source/shared/ui/modals/accept-modal'
import { numberFormSchema } from '@/source/widgets/phone-form-modal/schema/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { z } from 'zod'
import styles from './styles/styles.module.scss'

type FormValues = z.infer<typeof numberFormSchema>

type NumberModalProps = {
  onClose?: () => void
  constructor?: IFormValues | null
}

export const PriceDetailsModal: React.FC<NumberModalProps> = ({ onClose, constructor }: NumberModalProps) => {
  const [complete, setComplete] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(numberFormSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      phone: ''
    }
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    console.log(data)
    const formData = new FormData()
    formData.append('phone', data.phone)
    if (constructor) {
      formData.append('floor', constructor.floor)
      formData.append('sqr', constructor.sqr)
      formData.append('walls', constructor.walls)
      formData.append('facade', constructor.facade)
      formData.append('finishing', constructor.finishing)
    }
    formData.append('act', 'order')

    reset()
    setComplete(true)

    try {
      await fetch('/send.php', {
        method: 'POST',
        body: formData
      })
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
    }
  }

  return !complete ? (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <div className={styles.editWrapper}>
          <Icon icon={EIconName.Edit} />
        </div>
        <ExitButton onClose={onClose} />
      </div>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>Заполните номер телефона</h4>
        <p className={styles.description}>И мы свяжемся с вами по поводу цен.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PatternFormat
                {...field}
                format="+7 (###) ###-##-##"
                mask="_"
                className={styles.input}
                placeholder="*Введите Ваш номер телефона"
                allowEmptyFormatting={false}
                onFocus={e => {
                  e.target.placeholder = '+7 (___) ___-__-__'
                }}
                onBlur={e => {
                  if (!e.target.value) {
                    e.target.placeholder = '*Введите Ваш номер телефона'
                  }
                }}
              />
            )}
          />
          <p className={styles.error}>{errors.phone?.message || ' '}</p>
        </div>
        <button disabled={!isValid} className={styles.button} type={'submit'}>
          Отправить заявку
        </button>
      </form>
    </div>
  ) : (
    <AcceptModal onClose={onClose} />
  )
}
