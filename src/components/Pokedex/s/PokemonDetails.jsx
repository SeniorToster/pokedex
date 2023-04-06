import styles from './PokemonDetails.module.scss';

import { useSelector } from 'react-redux';
import {
  loadingPokemonDetailsState,
  pokemonDetailsState,
} from '../../../store/pokemonsSlice';
import IdlePokemon from '../IdlePokemon/IdlePokemon';
import LoadingPokemon from '../../Ui/LoadingPokemon/LoadingPokemon';
import TypesPokemon from '../../Ui/typesPokemon/TypesPokemon';

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

function PokemonDetailsSucceeded({ pokemon }) {
  const {
    img,
    id,
    name,
    types,
    text,
    abilities,
    weight,
    height,
    stats,
    evolution,
  } = pokemon;

  return (
    <div>
      <img src={img.png} alt='pokemon' />
      <p>#{id}</p>
      <h1>{name}</h1>
      <TypesPokemon types={types} />
      <p>{text}</p>
      <div>{abilities.map(item => {})}</div>
      <div>
        <p>{height}</p>
        <p>{weight}</p>
      </div>
    </div>
  );
}

export default PokemonDetails;
