import { useSelector } from 'react-redux';
import {
  loadingPokemonDetailsState,
  pokemonDetailsState,
} from '../../../store/pokemonsSlice';
import IdlePokemon from './IdlePokemon/IdlePokemon';
import LoadingPokemon from './LoadingPokemon/LoadingPokemon';
import TypesPokemon from '../../Ui/typesPokemon/TypesPokemon';
import Name from '../../Ui/Name/Name';
import AbilitiesPokemon from './AbilitiesPokemon/AbilitiesPokemon';
import StatsPokemon from './StatsPokemon/StatsPokemon';
import PaginationPokemons from './PaginationPokemons/PaginationPokemons';
import EvolutionPokemon from './EvolutionPokemon/EvolutionPokemon';

import styles from './PokemonDetails.module.scss';
import Title from '../../Ui/Title/Title';
import ErrorsPokemon from './ErrorsPokemon/ErrorsPokemon';
import SizePokemon from './SizePokemon/SizePokemon';

function PokemonDetails() {
  const loadingPokemon = useSelector(loadingPokemonDetailsState);
  const pokemon = useSelector(pokemonDetailsState);

  const renderElements = (loadingPokemon, pokemon) => {
    switch (loadingPokemon) {
      case 'idle':
        return <IdlePokemon />;
      case 'loading':
        return <LoadingPokemon />;
      case 'succeeded':
        return <PokemonDetailsSucceeded pokemon={pokemon} />;
      case 'error':
        return <ErrorsPokemon />;
    }
  };

  return (
    <div className={styles.wrapper}>
      {renderElements(loadingPokemon, pokemon)}
    </div>
  );
}

function PokemonDetailsSucceeded({ pokemon }) {
  const { img, id, name, types, text, abilities, sizes, stats, evolution } =
    pokemon;

  return (
    <div className={styles.pokemon}>
      <img src={img.png} alt='pokemon' />
      <span className={styles.pokemon_id}>#{id}</span>
      <Name size={'20px'}>{name}</Name>
      <TypesPokemon types={types} />
      <Title>POKÉDEX ENTRY</Title>
      <p className={styles.pokemon_text}>{text}</p>
      <AbilitiesPokemon abilities={abilities} />
      <SizePokemon sizes={sizes} />
      <StatsPokemon stats={stats} />
      <EvolutionPokemon evolution={evolution} />
      <PaginationPokemons id={id} />
    </div>
  );
}

export default PokemonDetails;
