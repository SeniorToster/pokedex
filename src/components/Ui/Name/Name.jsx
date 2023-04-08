import styles from './Name.module.scss';

function Name({ text }) {
  return <h3 className={styles.name}>{text}</h3>;
}

export default Name;
