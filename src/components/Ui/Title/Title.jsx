import styles from './Title.module.scss';

function Title({ text, size }) {
  return (
    <h3 className={styles.title} style={{ fontSize: size }}>
      {text}
    </h3>
  );
}

export default Title;
