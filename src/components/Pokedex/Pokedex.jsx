import React from 'react';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetails from './PokemonDetails/PokemonDetails';
import Search from './Search/Search';
import styles from './Pokedex.module.scss';

function Pokedex() {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <Search />
        <PokemonList />
      </div>
      <PokemonDetails />
    </div>
  );
}

export default Pokedex;
