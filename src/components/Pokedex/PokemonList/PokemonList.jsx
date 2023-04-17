import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import {
  fetchPokemons,
  focusPokemonState,
  loadingPokemonsState,
  pokemonsState,
} from '../../../store/pokemonsSlice';
import { limit } from '../../../api';

import PokemonItem from './PokemonItem/PokemonItem';
import SkeletonItem from './Skeleton/SkeletonItem';

import styles from './PokemonList.module.scss';

function PokemonList() {
  const { ref, inView } = useInView({ delay: 100 });
  const pokemons = useSelector(pokemonsState);
  const loadingPokemon = useSelector(loadingPokemonsState);
  const focusPokemon = useSelector(focusPokemonState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(fetchPokemons());
    }
  }, [inView]);

  return (
    <>
      <div className={styles.container}>
        {pokemons.length > 0 &&
          pokemons.map(pokemon => (
            <PokemonItem
              key={pokemon.id}
              focusPokemon={focusPokemon}
              pokemon={pokemon}
            />
          ))}

        {loadingPokemon !== 'error' ? (
          Array(limit)
            .fill()
            .map((_, i) => <SkeletonItem key={i} />)
        ) : (
          <h2>Ошибка</h2>
        )}
      </div>
      <span ref={ref}></span>
    </>
  );
}

export default PokemonList;
