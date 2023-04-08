import { useDispatch } from 'react-redux';
import TypesPokemon from '../../../Ui/typesPokemon/TypesPokemon';
import styles from './PokemonItem.module.scss';
import { fetchPokemonDetails } from '../../../../store/pokemonsSlice';
import Name from '../../../Ui/Name/Name';

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
      <Name text={name} size={'22px'} />
      <TypesPokemon types={types} />
    </div>
  );
}

export default PokemonItem;
