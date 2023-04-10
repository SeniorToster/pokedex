import pikachu from '../../../../assets/pikachu.png';
import styles from './SkeletonItem.module.scss';

function SkeletonItem() {
  return (
    <div className={styles.wrapper}>
      <img src={pikachu} />
    </div>
  );
}

export default SkeletonItem;
