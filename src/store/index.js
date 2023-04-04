import { configureStore } from '@reduxjs/toolkit';
import pokemons from './pokemonsSlice';

export const store = configureStore({
  reducer: { pokemons },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
