import PokedexPage from './pages/Pokedex';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PokedexPage />
    </Provider>
  );
}

export default App;
