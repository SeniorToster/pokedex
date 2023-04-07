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
import StatsPokemon from './StatsPokemon/StatsPokemon';
import PaginationPokemons from './PaginationPokemons/PaginationPokemons';

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
  const { img, id, name, types, text, abilities, sizes, stats, evolution } =
    pokemon;

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
        {sizes.map(({ name, data }) => (
          <div key={name} className={styles.pokemon_wrapperSize_item}>
            <p className={styles.pokemon_title_text}>{name}</p>
            <p className={styles.pokemon_wrapperSize_data}>{data}</p>
          </div>
        ))}
      </div>
      <p className={styles.pokemon_title_text}>stats</p>
      <StatsPokemon stats={stats} />
      <p className={styles.pokemon_title_text}>evolution</p>
      <div className={styles.evolution}>
        {evolution.length > 1 ? (
          evolution.map(({ id, name, img, level = undefined }) => (
            <>
              {level && <p>Lvl {level}</p>}
              <div
                onClick={() => {
                  console.log(id);
                }}
              >
                <img src={img} alt={name} />
              </div>
            </>
          ))
        ) : (
          <p>нету</p>
        )}
      </div>
      <PaginationPokemons id={id} />
    </div>
  );
}

export default PokemonDetails;
