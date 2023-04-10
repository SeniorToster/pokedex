import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemons,
  focusPokemonState,
  loadingPokemonsState,
  pokemonsState,
} from '../../../store/pokemonsSlice';
import PokemonItem from './PokemonItem/PokemonItem';
import styles from './PokemonList.module.scss';
import { useInView } from 'react-intersection-observer';
import SkeletonItem from './Skeleton/SkeletonItem';

function PokemonList() {
  const { ref, inView } = useInView();
  const pokemons = useSelector(pokemonsState);
  const loadingPokemon = useSelector(loadingPokemonsState);
  const focusPokemon = useSelector(focusPokemonState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [inView]);

  return (
    <div className={styles.container}>
      {pokemons.length > 0 &&
        pokemons.map(pokemon => (
          <Fragment key={pokemon.id}>
            <PokemonItem focusPokemon={focusPokemon} pokemon={pokemon} />
            <div ref={ref}></div>
          </Fragment>
        ))}

      {(loadingPokemon === 'idle' || loadingPokemon === 'loading') &&
        Array(20)
          .fill()
          .map((_, i) => <SkeletonItem key={i} />)}

      {loadingPokemon === 'error' && <h2>Ошибка</h2>}
    </div>
  );
}

export default PokemonList;
