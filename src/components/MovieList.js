import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
  const { movies, loading, error } = useSelector((state) => state);

  if (loading) {
    return <p className="message">Carregando...</p>;
  }

  if (error) {
    return <p className="error">Erro: {error}</p>;
  }

  return (
    <div className="movie-list">
      <h2>Filmes Encontrados</h2>

      {movies.length === 0 ? (
        <p className="message">Digite o nome de um filme para iniciar a busca.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              {movie.Poster && movie.Poster !== 'N/A' && (
                <img src={movie.Poster} alt={movie.Title} />
              )}

              <div>
                <strong>{movie.Title}</strong>
                <span>{movie.Year}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
