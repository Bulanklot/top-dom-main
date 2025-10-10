import styles from "./styles/styles.module.scss";
import { Icon } from '../icon'

export const ExitButton = ({ onClose }) => {
  return (
    <button className={styles.exitButtonWrapper} onClick={onClose}>
      <Icon  icon={'exit'} />
    </button>
  );
};
