import styles from './styles/styles.module.scss'
import React from 'react'
import { CustomButton } from '@/source/shared/ui/button'

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
        <CustomButton text={buttonText}/>
      </a>
    </div>
  )
}
