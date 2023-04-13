import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getPokemon,
  getPokemonEvolution,
  getPokemonSpecies,
  limit,
  url,
} from '../api';
import { validationUrl, validationOffset } from '../helpers/validation';
import ky from 'ky';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, thunkAPI) => {
    try {
      const { offset } = thunkAPI.getState().pokemons;
      const { results, next } = await ky
        .get(`${url}/pokemon?limit=${limit}&offset=${offset}`)
        .json();
      console.log(validationOffset(next));
      thunkAPI.dispatch(changeOffset(validationOffset(next)));

      const pokemons = [];
      for (const pokemon of results) {
        const data = await getPokemon(validationUrl(pokemon.url)).json();
        const { id, name, sprites, types } = data;
        pokemons.push({
          id,
          name,
          img: sprites.versions['generation-v'][`black-white`].animated
            .front_default,
          types,
        });
      }
      return pokemons;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemons/fetchPokemonDetails',
  async idPokemon => {
    const dataPokemon = await getPokemon(`${idPokemon}`).json();
    const { id, name, sprites, types, weight, height, abilities, stats } =
      dataPokemon;

    const dataSpecies = await getPokemonSpecies(`${idPokemon}`).json();
    const { evolution_chain, flavor_text_entries } = dataSpecies;

    const dataPokemonEvolution = await getPokemonEvolution(
      validationUrl(evolution_chain.url)
    ).json();
    const { chain } = dataPokemonEvolution;

    const pokemon = {
      id,
      name,
      sizes: [
        { name: 'weight', data: weight + 'Kg' },
        { name: 'height', data: height + 'm' },
      ],
      abilities,
      stats,
      text: flavor_text_entries[0].flavor_text,
      img: {
        gif: sprites.versions['generation-v'][`black-white`].animated
          .front_default,
        png: sprites.other.dream_world.front_default,
      },
      types,
      evolution: [],
    };

    if (chain.species.name === name) {
      pokemon.evolution.push({ name, id, img: pokemon.img.png });
    } else {
      const dataPokemon = await getPokemon(
        validationUrl(chain.species.url)
      ).json();
      pokemon.evolution.push({
        name: dataPokemon.name,
        id: dataPokemon.id,
        img: dataPokemon.sprites.other.dream_world.front_default,
      });
    }

    if (chain.evolves_to.length) {
      if (chain.evolves_to[0].species.name === name) {
        pokemon.evolution.push({
          name,
          id,
          img: pokemon.img.png,
          level: chain.evolves_to[0].evolution_details[0].min_level,
        });
      } else {
        const dataPokemon = await getPokemon(
          validationUrl(chain.evolves_to[0].species.url)
        ).json();
        pokemon.evolution.push({
          name: dataPokemon.name,
          id: dataPokemon.id,
          img: dataPokemon.sprites.other.dream_world.front_default,
          level: chain.evolves_to[0].evolution_details[0].min_level,
        });
      }

      if (chain.evolves_to[0].evolves_to.length) {
        if (chain.evolves_to[0].evolves_to[0].species.name === name) {
          pokemon.evolution.push({
            name,
            id,
            img: pokemon.img.png,
            level:
              chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
          });
        } else {
          const dataPokemon = await getPokemon(
            validationUrl(chain.evolves_to[0].evolves_to[0].species.url)
          ).json();
          pokemon.evolution.push({
            name: dataPokemon.name,
            id: dataPokemon.id,
            img: dataPokemon.sprites.other.dream_world.front_default,
            level:
              chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
          });
        }
      }
    }

    return pokemon;
  }
);

const initialState = {
  pokemons: [],
  pokemonDetails: {},
  focusPokemon: '',
  offset: '0',
  loadingPokemonDetails: 'idle',
  loadingPokemons: 'idle',
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    changeOffset: (state, { payload }) => {
      state.offset = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemons.pending, state => {
        state.loadingPokemons = 'loading';
      })
      .addCase(fetchPokemons.rejected, state => {
        state.loadingPokemons = 'error';
      })
      .addCase(fetchPokemons.fulfilled, (state, { payload }) => {
        state.loadingPokemons = 'succeeded';
        state.pokemons = state.pokemons.concat(payload);
      })
      .addCase(fetchPokemonDetails.pending, state => {
        state.loadingPokemonDetails = 'loading';
      })
      .addCase(fetchPokemonDetails.rejected, state => {
        state.loadingPokemonDetails = 'error';
        state.focusPokemon = '';
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, { payload }) => {
        state.loadingPokemonDetails = 'succeeded';
        state.pokemonDetails = payload;
        state.focusPokemon = payload.id;
      });
  },
});

const { reducer, actions } = pokemonsSlice;

export default reducer;

export const pokemonsState = state => state.pokemons.pokemons;

export const loadingPokemonsState = state => state.pokemons.loadingPokemons;
export const focusPokemonState = state => state.pokemons.focusPokemon;

export const loadingPokemonDetailsState = state =>
  state.pokemons.loadingPokemonDetails;

export const pokemonDetailsState = state => state.pokemons.pokemonDetails;

export const pokemonPaginationState = state => {
  state.pokemons.pokemon;

  return {};
};

export const { changeOffset } = actions;
