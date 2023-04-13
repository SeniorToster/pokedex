import pikachu from '../../../../assets/pikachu.png';
import styles from './ErrorsPokemon.module.scss';

function ErrorsPokemon() {
  return (
    <div className={styles.idle}>
      <img src={pikachu} />
      <p>There is no such Pokémon!</p>
    </div>
  );
}

export default ErrorsPokemon;
