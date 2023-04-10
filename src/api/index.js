import ky from 'ky';

export const url = 'https://pokeapi.co/api/v2';
export const limit = 30;

export const getPokemons = ky.create({
  prefixUrl: `${url}/pokemon?limit=${limit}`,
});

export const getPokemon = ky.create({
  prefixUrl: `${url}/pokemon`,
});

export const getPokemonSpecies = ky.create({
  prefixUrl: `${url}/pokemon-species`,
});

export const getPokemonEvolution = ky.create({
  prefixUrl: `${url}/evolution-chain`,
});
