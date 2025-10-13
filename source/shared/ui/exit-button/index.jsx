import styles from "./styles/styles.module.scss";
import { Icon } from '../icons'
import { IconName } from '../icons/type'

export const ExitButton = ({ onClose }) => {
  return (
    <button className={styles.exitButtonWrapper} onClick={onClose}>
      <Icon  icon={IconName.Exit} />
    </button>
  );
};
