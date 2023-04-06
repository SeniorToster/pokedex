import React from 'react';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetails from './PokemonDetails/PokemonDetails';
import Search from './Search/Search';
import styles from './Pokedex.module.scss';

function Pokedex() {
  return (
    <div className={styles.container}>
      <div>
        <Search />
        <PokemonList />
      </div>
      <PokemonDetails />
    </div>
  );
}

export default Pokedex;
