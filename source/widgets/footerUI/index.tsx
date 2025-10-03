import styles from './styles/styles.module.scss'
import React from 'react'
import footerLogo from '@/public/logo/footer-logo.svg'
import Image from 'next/image'
import logoShirt from '@/public/logo/logo-shirt.svg'
import vkLogo from '@/public/socials/vk.svg'
import youtubeLogo from '@/public/socials/youtube.svg'
import tgLogo from '@/public/socials/tg.svg'
import whatsLogo from '@/public/socials/whats.svg'

export const FooterUI: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Image priority src={footerLogo} alt="логотип" width={181} height={31} />
      <div className={styles.addressBlock}>
        <h3 className={styles.title}>Наши офисы</h3>
        <ul className={styles.addressList}>
          <li>г. Москва, Пресненская набережная, д. 8, стр. 1. Город столиц, “Башня Москва”</li>
          <li>г. Москва, Дзержинское шоссе, вл 7/7, Котельники (Малоэтажная страна)</li>
          <li>МО, городской округ Истра, КП “Рига Лайф”</li>
          <li>МО, городской округ Истра, КП “Алексино Форест Клаб”</li>
          <li>МО, городской округ Щелково, КП “Наследие”</li>
          <li>г. Казань, ул. Ризаэтдина Фахретдинова, 19</li>
          <li>п. Вешки, торгово-промышленная зона Альтуфьево, выставка домов Малоэтажная страна, 15</li>
        </ul>
      </div>
      <div className={styles.contacts}>
        <p>Телефон для связи:</p>
        <a href="tel:+78006000787">8(800)600-07-87</a>
      </div>
      <div className={styles.describer}>
        <Image src={logoShirt} alt="логотип" width={89} height={22} />
        <p>Все права защищены</p>
      </div>
      <div className={styles.socials}>
        <a href="https://t.me/topdom_rf" target="_blank" rel="noopener noreferrer">
          <Image src={tgLogo} alt="телеграм" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/79274534893?text=Здравствуйте! Здравствуйте! Хочу получить консультацию по инвестициям в ТопДом"
        >
          <Image src={whatsLogo} alt="Ватсап" />
        </a>
        <a href="https://youtube.com/@TOPDOM_RF" target="_blank" rel="noopener noreferrer">
          <Image src={youtubeLogo} alt="Ютуб" />
        </a>
        <a href="https://vk.com/topdomrf" target="_blank" rel="noopener noreferrer">
          <Image src={vkLogo} alt="вконтакте" />
        </a>
      </div>
    </footer>
  )
}
