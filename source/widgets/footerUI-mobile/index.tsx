import styles from './styles/styles.module.scss'
import React from 'react'
import footerLogo from '@/public/logo/footer-logo.svg'
import Image from 'next/image'
import logoShirt from '@/public/logo/logo-shirt.svg'
import vkLogo from '@/public/socials/vk.svg'
import youtubeLogo from '@/public/socials/youtube.svg'
import tgLogo from '@/public/socials/tg.svg'
import whatsLogo from '@/public/socials/whats.svg'

export const FooterUIMobile: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Image unoptimized priority src={footerLogo} alt="логотип" width={181} height={31} />
      <div className={styles.addressBlock}>
        <h3 className={styles.title}>Наши офисы</h3>
        <ul className={styles.addressList}>
          <li>
            <p>
              г. Москва, Пресненская набережная, д. 8, стр. 1. <span>Город столиц, “Башня Москва”</span>
            </p>
          </li>
          <li>
            <p>
              г. Москва, Дзержинское шоссе, вл 7/7, <span>Котельники (Малоэтажная страна)</span>
            </p>
          </li>
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
        <Image unoptimized src={logoShirt} alt="логотип" width={89} height={22} />
        <p>Все права защищены</p>
      </div>
      <div className={styles.socials}>
        <a href="https://t.me/topdom_rf" target="_blank" rel="noopener noreferrer">
          <Image unoptimized src={tgLogo} alt="телеграм" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/79274534893?text=Здравствуйте! Хочу получить консультацию"
        >
          <Image unoptimized src={whatsLogo} alt="Ватсап" />
        </a>
        <a href="https://youtube.com/@TOPDOM_RF" target="_blank" rel="noopener noreferrer">
          <Image unoptimized src={youtubeLogo} alt="Ютуб" />
        </a>
        <a href="https://vk.com/topdomrf" target="_blank" rel="noopener noreferrer">
          <Image unoptimized src={vkLogo} alt="вконтакте" />
        </a>
      </div>
    </footer>
  )
}
