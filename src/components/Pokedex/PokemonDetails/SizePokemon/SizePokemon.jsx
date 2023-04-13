import Title from '../../../Ui/Title/Title';
import styles from './SizePokemon.module.scss';

function SizePokemon({ sizes }) {
  console.log(1);
  return (
    <div className={styles.size}>
      {sizes.map(({ name, data }) => (
        <div key={name} className={styles.size_item}>
          <Title>{name}</Title>
          <p className={styles.size_data}>{data}</p>
        </div>
      ))}
    </div>
  );
}

export default SizePokemon;
