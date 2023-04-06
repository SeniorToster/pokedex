import pikachu from '../../../../assets/pikachu.png';
import styles from './IdlePokemon.module.scss';

function IdlePokemon() {
  return (
    <div className={styles.idle}>
      <img src={pikachu} />
      <p>Select a Pokemon to display here.</p>
    </div>
  );
}

export default IdlePokemon;
