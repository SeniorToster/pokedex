import { useDispatch } from 'react-redux';
import TypesPokemon from '../../../Ui/typesPokemon/TypesPokemon';
import styles from './PokemonItem.module.scss';
import { fetchPokemonDetails } from '../../../../store/pokemonsSlice';
import Name from '../../../Ui/Name/Name';

function PokemonItem({ pokemon, focusPokemon }) {
  const { img, name, id, types } = pokemon;
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: `4px solid ${focusPokemon === id ? `#b6c8d8` : `#ffff`}`,
      }}
      className={styles.wrapper}
      onClick={() => {
        dispatch(fetchPokemonDetails(id));
      }}
    >
      <img src={img} />
      <p className={styles.wrapper_id}>Nº{id}</p>
      <Name size={'18px'}>{name}</Name>
      <TypesPokemon types={types} />
    </div>
  );
}

export default PokemonItem;
