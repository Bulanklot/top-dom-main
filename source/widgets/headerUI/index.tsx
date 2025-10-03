import styles from './styles/styles.module.scss'
import logo from '@/public/logo/logo.svg'
import Image from 'next/image'
import React from "react";

export const HeaderUI: React.FC = ()=> {
  return (
    <header className={styles.container}>
      <Image unoptimized priority src={logo} alt="логотип" width={181} height={31} />
      <div className={styles.contacts}>
        <p>Заказать звонок</p>
        <a href="tel:+74951839288">+7 (495) 183 92 88</a>
      </div>
    </header>
  )}
