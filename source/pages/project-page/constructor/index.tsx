'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { FC, useState } from 'react'
import styles from './constructor.module.scss'
import { Content, Trigger } from '@/source/shared/ui/accordion'
import { Modal } from '@/source/shared/ui/modalUI'
import { PriceDetailsModal } from '@/source/widgets/price-detail-form-modal'
import { useForm } from 'react-hook-form'

export interface IFormValues {
  floor: 'Одноэтажный' | 'Двухэтажный'
  sqr: '60 - 170 м²' | '170+'
  walls: 'Керамический кирпич' | 'Газобетонные блоки'
  facade: 'Облицовочный кирпич' | 'Штукатурка'
  finishing: 'Черновая' | 'Предчистовая' | 'С ремонтом'
}

const Constructor: FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const { register, watch } = useForm<IFormValues>({
    mode: 'all',
    defaultValues: {
      floor: 'Одноэтажный',
      sqr: '60 - 170 м²',
      walls: 'Керамический кирпич',
      facade: 'Облицовочный кирпич',
      finishing: 'Черновая'
    }
  })

  const floor = watch('floor')
  const sqr = watch('sqr')
  const walls = watch('walls')
  const facade = watch('facade')
  const finishing = watch('finishing')

  return (
    <Accordion.Root className={styles.accordionRoot} type="single" defaultValue="20 000 000 ₽" collapsible>
      <Accordion.Item className="AccordionItem" value="item-1">
        <Trigger className={styles.accordionTrigger}>
          <div className={styles.triggerContent}>
            <div>
              <span className={styles.title}>Конструктор дома</span>
              <span className={styles.priceTitle}>Соберите свой дом</span>
            </div>
            <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
          </div>
        </Trigger>
        <Content>
          <div className={styles.accordionContent}>
            <form>
              <ul className={styles.accordionList}>
                <li className={styles.accordionItem}>
                  <span className={styles.accordionItemTitle}>Этажность</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="Одноэтажный" {...register('floor')} />
                      Одноэтажный
                    </label>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="Двухэтажный" {...register('floor')} />
                      Двухэтажный
                    </label>
                  </div>
                </li>
                <li className={styles.accordionItem}>
                  <span className={styles.accordionItemTitle}>Площадь</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="60 - 170 м²" {...register('sqr')} />
                      60 - 170 м²
                    </label>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="170+" {...register('sqr')} />
                      170+
                    </label>
                  </div>
                </li>
                <li className={styles.accordionItem}>
                  <span className={styles.accordionItemTitle}>Стены</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        className={styles.radioInput}
                        type="radio"
                        value="Керамический кирпич"
                        {...register('walls')}
                      />
                      Керамический кирпич
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        className={styles.radioInput}
                        type="radio"
                        value="Газобетонные блоки"
                        {...register('walls')}
                      />
                      Газобетонные блоки
                    </label>
                  </div>
                </li>
                <li className={styles.accordionItem}>
                  <span className={styles.accordionItemTitle}>Фасад</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        className={styles.radioInput}
                        type="radio"
                        value="Облицовочный кирпич"
                        {...register('facade')}
                      />
                      Облицовочный кирпич
                    </label>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="Штукатурка" {...register('facade')} />
                      Штукатурка
                    </label>
                  </div>
                </li>
                <li className={styles.accordionItem}>
                  <span className={styles.accordionItemTitle}>Отделка</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="Черновая" {...register('finishing')} />
                      Черновая
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        className={styles.radioInput}
                        type="radio"
                        value="Предчистовая"
                        {...register('finishing')}
                      />
                      Предчистовая
                    </label>
                    <label className={styles.radioLabel}>
                      <input className={styles.radioInput} type="radio" value="С ремонтом" {...register('finishing')} />
                      С ремонтом
                    </label>
                  </div>
                </li>
              </ul>
            </form>
            <button
              onClick={() => {
                setOpenModal(!openModal)
              }}
              type="button"
              className={styles.button}
            >
              Рассчитать стоимость
            </button>
          </div>

          <Modal onOpenChange={setOpenModal} open={openModal}>
            <PriceDetailsModal
              constructor={{ facade, finishing, floor, sqr, walls }}
              onClose={() => setOpenModal(false)}
            />
          </Modal>
        </Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export default Constructor
