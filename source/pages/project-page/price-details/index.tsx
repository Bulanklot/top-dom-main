import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import styles from './price-details.module.scss'
import { Content, Trigger } from '@/source/shared/ui/accordion'
import clsx from 'clsx'

const PriceDetails: FC = () => (
  <Accordion.Root className={styles.accordionRoot} type="single" defaultValue="20 000 000 ₽" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <Trigger className={styles.accordionTrigger}>
        <div className={styles.triggerContent}>
          <div>
            <b className={styles.price}>20 000 000 ₽</b>
            <span className={styles.priceTitle}>Стоимость дома</span>
          </div>
          <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
        </div>
        <div className={styles.priceBar}>
          <div className={styles.barRed}></div>
          <div className={styles.barGreen}></div>
          <div className={styles.barOrange}></div>
          <div className={styles.barYellow}></div>
          <div className={styles.barPurple}></div>
        </div>
      </Trigger>
      <Content>
        <div className={styles.accordionContent}>
          <ul className={styles.accordionList}>
            <li className={styles.accordionItem}>
              <div className={styles.accordionItemLeft}>
                <div className={clsx(styles.accordionItemIcon, styles.price1)}></div>
                <span className={styles.accordionItemLeftText}>Подготовительные работы и проектирование</span>
              </div>
              <span className={styles.accordionItemRight}>1.3 млн ₽</span>
            </li>
            <li className={styles.accordionItem}>
              <div className={styles.accordionItemLeft}>
                <div className={clsx(styles.accordionItemIcon, styles.price2)}></div>
                <span className={styles.accordionItemLeftText}>
                  Несущие конструкции
                  <br />и ограждающие элементы
                </span>
              </div>
              <span className={styles.accordionItemRight}>5.3 млн ₽</span>
            </li>
            <li className={styles.accordionItem}>
              <div className={styles.accordionItemLeft}>
                <div className={clsx(styles.accordionItemIcon, styles.price3)}></div>
                <span className={styles.accordionItemLeftText}>Кровля и оконно-дверные элементы</span>
              </div>
              <span className={styles.accordionItemRight}>3.3 млн ₽</span>
            </li>
            <li className={styles.accordionItem}>
              <div className={styles.accordionItemLeft}>
                <div className={clsx(styles.accordionItemIcon, styles.price4)}></div>
                <span className={styles.accordionItemLeftText}>Инженерные системы</span>
              </div>
              <span className={styles.accordionItemRight}>4.3 млн ₽</span>
            </li>
            <li className={styles.accordionItem}>
              <div className={styles.accordionItemLeft}>
                <div className={clsx(styles.accordionItemIcon, styles.price5)}></div>
                <span className={styles.accordionItemLeftText}>Черновая отделка внутренних помещений</span>
              </div>
              <span className={styles.accordionItemRight}>6.3 млн ₽</span>
            </li>
          </ul>
        </div>
      </Content>
    </Accordion.Item>
  </Accordion.Root>
)

export default PriceDetails
