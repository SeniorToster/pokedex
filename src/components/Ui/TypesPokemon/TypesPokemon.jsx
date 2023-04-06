import { colorTypes } from '../../../helpers/colorTypes';
import styles from './TypesPokemon.module.scss';

function TypesPokemon({ types }) {
  return (
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
  );
}

export default TypesPokemon;
