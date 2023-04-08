import { AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './AbilitiesPokemon.module.scss';
import Title from '../../../Ui/Title/Title';

function AbilitiesPokemon({ abilities }) {
  return (
    <>
      <Title>ABILITIES</Title>
      <div className={styles.abilities}>
        {abilities.map(({ ability, is_hidden }) => {
          const style = is_hidden ? '#b84647' : '#b6c8d8';
          return (
            <div
              key={ability.name}
              style={{ borderColor: style }}
              className={styles.abilities_item}
            >
              {ability.name} {is_hidden && <AiOutlineEyeInvisible />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AbilitiesPokemon;
