import axios from 'axios';

// Troque pela sua chave da OMDb API.
const API_KEY = 'YOUR_API_KEY';

export const fetchMoviesThunk = (query) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      if (response.data.Response === 'False') {
        dispatch({
          type: 'FETCH_MOVIES_FAILURE',
          payload: response.data.Error || 'Nenhum filme encontrado.'
        });
        return;
      }

      dispatch({
        type: 'FETCH_MOVIES_SUCCESS',
        payload: response.data.Search
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_MOVIES_FAILURE',
        payload: error.message
      });
    }
  };
};
