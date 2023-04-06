import styles from './PokemonDetails.module.scss';

import { useSelector } from 'react-redux';
import {
  loadingPokemonDetailsState,
  pokemonDetailsState,
} from '../../../store/pokemonsSlice';
import IdlePokemon from '../../Ui/IdlePokemon/IdlePokemon';
import LoadingPokemon from '../../Ui/LoadingPokemon/LoadingPokemon';

function PokemonDetails() {
  const loadingPokemon = useSelector(loadingPokemonDetailsState);
  const pokemon = useSelector(pokemonDetailsState);

  console.log(loadingPokemon);
  console.log(pokemon);

  const renderElements = (loadingPokemon, pokemon) => {
    switch (loadingPokemon) {
      case 'idle':
        return <IdlePokemon />;
      case 'loading':
        return <LoadingPokemon />;
      case 'succeeded':
        return <PokemonDetailsSucceeded pokemon={pokemon} />;
    }
  };

  return (
    <div className={styles.wrapper}>
      {renderElements(loadingPokemon, pokemon)}
    </div>
  );
}

function PokemonDetailsSucceeded() {
  return <div>PokemonDetails</div>;
}

export default PokemonDetails;
