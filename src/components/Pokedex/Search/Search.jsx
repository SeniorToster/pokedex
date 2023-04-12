import styles from './Search.module.scss';
import icon from '../../../assets/pokeball-icon.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonDetails } from '../../../store/pokemonsSlice';
function Search() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(fetchPokemonDetails(text.toLowerCase()));
      }}
      className={styles.form}
    >
      <input
        onChange={e => setText(e.target.value)}
        value={text}
        type='text'
        className={styles.form_search}
        placeholder='Search your Pokemon!'
      />
      <button className={styles.form_button} type='submit'>
        <img src={icon} alt='icon pokeball' />
      </button>
    </form>
  );
}

export default Search;
