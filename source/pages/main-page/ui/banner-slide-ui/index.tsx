import styles from './styles/styles.module.scss'
import React from 'react'

export type TBanner = {
  title: string
  buttonText: string
  description?: string
  imageSrc?: string
  buttonGradient?: string
  titleColor?: string
}

type TBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  banner: TBanner
}

export const BannerSlideUI: React.FC<TBannerProps> = props => {
  const { title, buttonText, description, imageSrc, titleColor } = props.banner

  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`
      }}
      className={styles.container}
    >
      <h1
        style={{
          color: titleColor
        }}
        className={styles.title}
      >
        {title}
      </h1>
      {description && (
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/79274534893?text=Здравствуйте! Хочу рассчитать стоимость дома"
        className={styles.link}
      >
        {' '}
        <button className={styles.button}>
          <span>{buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 8V9H8V8V7H7V8Z"
              fill="black"
            />
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 8V9H8V8V7H7V8Z"
              fill="url(#paint0_linear_1512_8388)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1512_8388"
                x1="-1"
                y1="13"
                x2="8.30272"
                y2="8.44482"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#177CCE" />
                <stop offset="0.5" stopColor="#24A3F9" />
                <stop offset="1" stopColor="#56CCFB" />
              </linearGradient>
            </defs>
          </svg>{' '}
        </button>{' '}
      </a>
    </div>
  )
}
