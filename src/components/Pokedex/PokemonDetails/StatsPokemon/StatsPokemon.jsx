import { statsData } from '../../../../helpers/statsData';
import Title from '../../../Ui/Title/Title';
import styles from './StatsPokemon.module.scss';

function StatsPokemon({ stats }) {
  return (
    <>
      <Title>stats</Title>
      <div className={styles.stats}>
        {stats.map(({ base_stat, stat }) => {
          const { label, color } = statsData.stats.find(
            statExtra => statExtra.name === stat.name
          );
          return (
            <div key={label} className={styles.stats_item}>
              <div
                style={{ backgroundColor: color }}
                className={styles.stats_circle}
              >
                <p>{label}</p>
              </div>
              <p>{base_stat}</p>
            </div>
          );
        })}
        <div
          style={{ backgroundColor: statsData.totalStats.background }}
          className={styles.stats_item}
        >
          <div
            style={{ backgroundColor: statsData.totalStats.color }}
            className={styles.stats_circle}
          >
            <p>{statsData.totalStats.label}</p>
          </div>
          <p>
            {stats.reduce((accum, { base_stat }) => (accum += base_stat), 0)}
          </p>
        </div>
      </div>
    </>
  );
}

export default StatsPokemon;
