import styles from './Search.module.scss';
import icon from '../../../assets/pokeball-icon.svg';
function Search() {
  return (
    <form className={styles.form}>
      <input
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
