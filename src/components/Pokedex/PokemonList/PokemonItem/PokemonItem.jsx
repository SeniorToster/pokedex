import { useDispatch } from 'react-redux';
import TypesPokemon from '../../../Ui/typesPokemon/TypesPokemon';
import styles from './PokemonItem.module.scss';
import { fetchPokemonDetails } from '../../../../store/pokemonsSlice';

function PokemonItem({ pokemon }) {
  const { img, name, id, types } = pokemon;
  const dispatch = useDispatch();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        dispatch(fetchPokemonDetails(id));
      }}
    >
      <img src={img} />
      <p className={styles.wrapper_id}>Nº{id}</p>
      <h3 className={styles.wrapper_name}>
        {name[0].toUpperCase() + name.slice(1)}
      </h3>
      <TypesPokemon types={types} />
    </div>
  );
}

export default PokemonItem;
