import styles from './Name.module.scss';

function Name({ children, size }) {
  return (
    <h3 style={{ fontSize: size }} className={styles.name}>
      {children}
    </h3>
  );
}

export default Name;
