import ky from 'ky';

const url = 'https://pokeapi.co/api/v2';
const limit = '30';

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
