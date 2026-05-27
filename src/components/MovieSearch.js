import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMoviesThunk } from '../redux/thunkActions';
import { fetchMoviesSaga } from '../redux/sagasActions';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearchWithThunk = () => {
    if (query.trim() === '') return;
    dispatch(fetchMoviesThunk(query));
  };

  const handleSearchWithSaga = () => {
    if (query.trim() === '') return;
    dispatch(fetchMoviesSaga(query));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar filme"
      />

      <button onClick={handleSearchWithThunk}>Buscar com Thunk</button>
      <button onClick={handleSearchWithSaga}>Buscar com Saga</button>
    </div>
  );
};

export default MovieSearch;
