import styles from './PokemonDetails.module.scss';
import pikachu from '../../../assets/pikachu.png';
import { useSelector } from 'react-redux';
import { pokemonState } from '../../../store/pokemonsSlice';

function PokemonDetails() {
  const pokemon = useSelector(pokemonState);
  console.log(pokemon);
  return (
    <div className={styles.wrapper}>
      <img src={pikachu} />
      <p>Select a Pokemon to display here.</p>
    </div>
  );
}

export default PokemonDetails;
