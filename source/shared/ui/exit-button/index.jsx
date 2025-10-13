import styles from "./styles/styles.module.scss";
import { Icon } from '../icons'
import { EIconName } from '../icons/type'

export const ExitButton = ({ onClose }) => {
  return (
    <button className={styles.exitButtonWrapper} onClick={onClose}>
      <Icon  icon={EIconName.Exit} />
    </button>
  );
};
