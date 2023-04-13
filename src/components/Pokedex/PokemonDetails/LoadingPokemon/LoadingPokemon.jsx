import pokeball from '../../../../assets/pokeball-icon.svg';
import styles from './LoadingPokemon.module.scss';
function LoadingPokemon() {
  return (
    <div className={styles.pokeballLoading}>
      <img src={pokeball} alt='pokeball' />
    </div>
  );
}

export default LoadingPokemon;
