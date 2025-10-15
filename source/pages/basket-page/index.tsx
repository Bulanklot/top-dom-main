import styles from "./styles/styles.module.scss";
import { BasketGallery } from '@/source/pages/basket-page/basketGallery'

export const BasketPage = () => {
  return (
    <div className={styles.container}>
    <h3 className={styles.title}>Корзина</h3>
  <BasketGallery/>
    </div>
  )
}