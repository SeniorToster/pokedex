import ky from 'ky';

const api = 'https://pokeapi.co/api/v2';
const limit = '20';

export const getPokemons = ky.create({
  prefixUrl: `${api}/pokemon?limit=${limit}`,
});

export const getPokemon = ky.create({
  prefixUrl: `${api}/pokemon`,
});
