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

const renderPokemonList = (loadingPokemon, focusPokemon, ref, pokemons) => {
  switch (loadingPokemon) {
    case 'idle':
      return <h2>Загрузка</h2>;
    case 'loading':
      return <h2>Загрузка</h2>;
    case 'error':
      return <h2>Ошибка</h2>;
    case 'succeeded':
      return pokemons.map(pokemon => (
        <Fragment key={pokemon.id}>
          <PokemonItem focusPokemon={focusPokemon} pokemon={pokemon} />
          <div ref={ref}></div>
        </Fragment>
      ));
  }
};

function PokemonList() {
  const { ref, inView } = useInView();
  const pokemons = useSelector(pokemonsState);
  const loadingPokemon = useSelector(loadingPokemonsState);
  const focusPokemon = useSelector(focusPokemonState);
  const dispatch = useDispatch();

  console.log(inView);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className={styles.container}>
      {renderPokemonList(loadingPokemon, focusPokemon, ref, pokemons)}
    </div>
  );
}

export default PokemonList;
