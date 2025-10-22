import styles from "./styles/styles.module.scss";
import { BurgerMenu } from '@/source/pages/categories-page/ui/burger-menu'


export const CategoriesPage = () => {
  return (
  <div className={styles.container}>
    <BurgerMenu />
  </div>
  )
}