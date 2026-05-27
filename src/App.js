import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>MovieMania</h1>
        <p className="subtitle">Busca de filmes usando Redux, Thunk, Saga e Logger</p>
        <MovieSearch />
        <MovieList />
      </div>
    </Provider>
  );
};

export default App;
