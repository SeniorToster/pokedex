import { useSelector } from 'react-redux';
import styles from './PaginationPokemons.module.scss';

function PaginationPokemons({ id }) {
  const nextPokemon = useSelector(state =>
    state.pokemons.pokemons.find(pokemon => id + 1 === pokemon.id)
  );
  const prevPokemon = useSelector(state =>
    state.pokemons.pokemons.find(pokemon => id - 1 === pokemon.id)
  );
  console.log(nextPokemon, prevPokemon);
  return (
    <div className={styles.pagination}>
      {prevPokemon && (
        <div className={styles.pagination_item}>
          <img src={prevPokemon.img} alt={prevPokemon.name} />
          <p>{prevPokemon.name}</p>
          <span>#{prevPokemon.id}</span>
        </div>
      )}
      <hr />
      {nextPokemon && (
        <div className={styles.pagination_item}>
          <span>#{nextPokemon.id}</span>
          <p>{nextPokemon.name}</p>
          <img src={nextPokemon.img} alt={nextPokemon.name} />
        </div>
      )}
    </div>
  );
}

export default PaginationPokemons;
