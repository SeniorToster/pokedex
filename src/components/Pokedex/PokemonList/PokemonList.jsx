import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemons,
  loadingPokemonsState,
  pokemonsState,
} from '../../../store/pokemonsSlice';
import PokemonItem from './PokemonItem/PokemonItem';
import styles from './PokemonList.module.scss';

const renderPokemonList = (loadingPokemon, pokemons) => {
  switch (loadingPokemon) {
    case 'idle':
      return <h2>Загрузка</h2>;
    case 'loading':
      return <h2>Загрузка</h2>;
    case 'error':
      return <h2>Ошибка</h2>;
    case 'succeeded':
      return pokemons.map(pokemon => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ));
  }
};

function PokemonList() {
  const pokemons = useSelector(pokemonsState);
  const loadingPokemon = useSelector(loadingPokemonsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className={styles.container}>
      {renderPokemonList(loadingPokemon, pokemons)}
    </div>
  );
}

export default PokemonList;
