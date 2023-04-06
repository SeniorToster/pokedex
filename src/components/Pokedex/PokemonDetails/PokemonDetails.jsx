import styles from './PokemonDetails.module.scss';

import { useSelector } from 'react-redux';
import {
  loadingPokemonDetailsState,
  pokemonDetailsState,
} from '../../../store/pokemonsSlice';
import IdlePokemon from './IdlePokemon/IdlePokemon';
import LoadingPokemon from './LoadingPokemon/LoadingPokemon';
import TypesPokemon from '../../Ui/typesPokemon/TypesPokemon';
import Title from '../../Ui/Title/Title';
import AbilitiesPokemon from './AbilitiesPokemon/AbilitiesPokemon';

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
    <div className={styles.pokemon}>
      <img src={img.png} alt='pokemon' />
      <span className={styles.pokemon_id}>#{id}</span>
      <Title text={name} size={'30px'} />
      <TypesPokemon types={types} />
      <p className={styles.pokemon_title_text}>POKÉDEX ENTRY</p>
      <p className={styles.pokemon_text}>{text}</p>
      <p className={styles.pokemon_title_text}>ABILITIES</p>
      <AbilitiesPokemon abilities={abilities} />
      <div className={styles.pokemon_wrapperSize}>
        <div className={styles.pokemon_wrapperSize_item}>
          <p className={styles.pokemon_title_text}>height</p>
          <p className={styles.pokemon_wrapperSize_data}>{height}m</p>
        </div>
        <div className={styles.pokemon_wrapperSize_item}>
          <p className={styles.pokemon_title_text}>weight</p>
          <p className={styles.pokemon_wrapperSize_data}>{weight}Kg</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
