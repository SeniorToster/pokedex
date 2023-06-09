import { useDispatch, useSelector } from 'react-redux';
import { TfiClose } from 'react-icons/tfi';

import {
  changeFocusPokemon,
  focusPokemonState,
  loadingPokemonDetailsState,
  pokemonDetailsState,
} from '../../../store/pokemonsSlice';

import IdlePokemon from './IdlePokemon/IdlePokemon';
import LoadingPokemon from './LoadingPokemon/LoadingPokemon';
import ErrorsPokemon from './ErrorsPokemon/ErrorsPokemon';

import TypesPokemon from '../../Ui/TypesPokemon/TypesPokemon';
import AbilitiesPokemon from './AbilitiesPokemon/AbilitiesPokemon';
import StatsPokemon from './StatsPokemon/StatsPokemon';
import PaginationPokemons from './PaginationPokemons/PaginationPokemons';
import EvolutionPokemon from './EvolutionPokemon/EvolutionPokemon';

import Name from '../../Ui/Name/Name';
import Title from '../../Ui/Title/Title';
import SizePokemon from './SizePokemon/SizePokemon';

import styles from './PokemonDetails.module.scss';
import useMedia from '../../../hooks/useMedia';

function PokemonDetails() {
  const loadingPokemon = useSelector(loadingPokemonDetailsState);
  const focusPokemon = useSelector(focusPokemonState);
  const pokemon = useSelector(pokemonDetailsState);
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 1400px)');

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
    <>
      {focusPokemon && (
        <div className={styles.close}>
          <TfiClose onClick={() => dispatch(changeFocusPokemon())} />
        </div>
      )}
      <div
        style={{
          visibility: isMobile && (focusPokemon ? 'visible' : 'hidden'),
        }}
        className={styles.wrapper}
      >
        {renderElements(loadingPokemon, pokemon)}
      </div>
    </>
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
