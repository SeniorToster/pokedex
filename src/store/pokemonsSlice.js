import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemon, getPokemons } from '../api';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async offset => {
    const isOffset = offset ? `&offset=${offset}` : '';
    try {
      const { results } = await getPokemons.get(isOffset).json();
      const pokemons = [];
      for (const pokemon of results) {
        const data = await getPokemon(
          pokemon.url.match(/\/\d+/gm)[0].replace('/', '')
        ).json();
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

const initialState = {
  pokemons: [],
  loadingPokemons: 'idle',
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    test: state => {
      state.pokemons.push('1');
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
        state.pokemons = payload;
      });
  },
});

const { reducer, actions } = pokemonsSlice;

export default reducer;

export const pokemonsState = state => state.pokemons.pokemons;

export const { test } = actions;
