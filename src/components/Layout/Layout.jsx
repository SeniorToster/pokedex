import styles from './Layout.module.scss';
import Header from './Header/Header';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
