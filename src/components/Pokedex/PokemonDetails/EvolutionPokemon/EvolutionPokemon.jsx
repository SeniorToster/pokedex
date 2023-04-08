import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import styles from './EvolutionPokemon.module.scss';
import { fetchPokemonDetails } from '../../../../store/pokemonsSlice';
import Title from '../../../Ui/Title/Title';

function EvolutionPokemon({ evolution }) {
  const dispatch = useDispatch();

  return (
    <>
      <Title>evolution</Title>
      <div className={styles.evolution}>
        {evolution.length > 1 ? (
          evolution.map(({ id, name, img, level = undefined }, index) => (
            <Fragment key={id}>
              {index > 0 && <p>{level ? `Lvl ${level}` : '?'}</p>}
              <div onClick={() => dispatch(fetchPokemonDetails(id))}>
                <img src={img} alt={name} />
              </div>
            </Fragment>
          ))
        ) : (
          <p>нету</p>
        )}
      </div>
    </>
  );
}

export default EvolutionPokemon;
