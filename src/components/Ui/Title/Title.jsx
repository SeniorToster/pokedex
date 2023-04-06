import styles from './Title.module.scss';

function Title({ text, size }) {
  return (
    <h2 className={styles.title} style={{ fontSize: size }}>
      {text[0].toUpperCase() + text.slice(1)}
    </h2>
  );
}

export default Title;
