import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetails } from '../../../../store/pokemonsSlice';

import styles from './PaginationPokemons.module.scss';

function PaginationPokemons({ id }) {
  const nextPokemon = useSelector(state =>
    state.pokemons.pokemons.find(pokemon => id + 1 === pokemon.id)
  );
  const prevPokemon = useSelector(state =>
    state.pokemons.pokemons.find(pokemon => id - 1 === pokemon.id)
  );
  const dispatch = useDispatch();

  const onClicked = id => dispatch(fetchPokemonDetails(id));

  return (
    <div className={styles.pagination}>
      {prevPokemon && (
        <div
          onClick={() => onClicked(prevPokemon.id)}
          className={styles.pagination_item}
        >
          <FiChevronLeft />
          <img src={prevPokemon.img} alt={prevPokemon.name} />
          <p>{prevPokemon.name}</p>
          <span>#{prevPokemon.id}</span>
        </div>
      )}
      {nextPokemon && prevPokemon && <span></span>}
      {nextPokemon && (
        <div
          onClick={() => onClicked(nextPokemon.id)}
          className={styles.pagination_item}
        >
          <span>#{nextPokemon.id}</span>
          <p>{nextPokemon.name}</p>
          <img src={nextPokemon.img} alt={nextPokemon.name} />
          <FiChevronRight />
        </div>
      )}
    </div>
  );
}

export default PaginationPokemons;
