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
import styles from './PokemonList.module.scss';
import SkeletonItem from './Skeleton/SkeletonItem';

function PokemonList() {
  const { ref, inView } = useInView({ delay: 200 });
  const pokemons = useSelector(pokemonsState);
  const loadingPokemon = useSelector(loadingPokemonsState);
  const focusPokemon = useSelector(focusPokemonState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) dispatch(fetchPokemons());
  }, [inView]);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className={styles.container}>
      {pokemons.length > 0 && (
        <>
          {pokemons.map(pokemon => (
            <PokemonItem
              key={pokemon.id}
              focusPokemon={focusPokemon}
              pokemon={pokemon}
            />
          ))}
          <span ref={ref}>_</span>
        </>
      )}

      {(loadingPokemon === 'idle' || loadingPokemon === 'loading') &&
        Array(limit)
          .fill()
          .map((_, i) => <SkeletonItem key={i} />)}

      {loadingPokemon === 'error' && <h2>Ошибка</h2>}
    </div>
  );
}

export default PokemonList;
