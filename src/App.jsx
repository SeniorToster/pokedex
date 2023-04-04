import { useEffect } from 'react';
import './App.css';
import { fetchPokemons, pokemonsState } from './store/pokemonsSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(pokemonsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className='App'>
      {pokemons.map(pokemon => (
        <img src={pokemon.img} />
      ))}
    </div>
  );
}

export default App;
