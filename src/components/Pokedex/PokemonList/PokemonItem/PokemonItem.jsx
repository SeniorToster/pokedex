import { colorTypes } from '../../../../helpers/colorTypes';
import styles from './PokemonItem.module.scss';

function PokemonItem({ pokemon }) {
  const { img, name, id, types } = pokemon;
  return (
    <div className={styles.wrapper}>
      <img src={img} />
      <p className={styles.wrapper_id}>Nº{id}</p>
      <h3 className={styles.wrapper_name}>
        {name[0].toUpperCase() + name.slice(1)}
      </h3>
      <li className={styles.wrapper_typeList}>
        {types.map(({ type }) => {
          const { color } = colorTypes.find(item => item.name === type.name);
          return (
            <ul
              style={{
                backgroundColor: color,
              }}
              key={type.name}
              className={styles.wrapper_typeItem}
            >
              {type.name.toUpperCase()}
            </ul>
          );
        })}
      </li>
    </div>
  );
}

export default PokemonItem;
