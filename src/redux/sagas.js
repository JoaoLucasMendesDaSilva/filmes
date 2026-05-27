import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Troque pela sua chave da OMDb API.
const API_KEY = 'YOUR_API_KEY';

function fetchMoviesFromAPI(query) {
  return axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
}

function* fetchMoviesSaga(action) {
  try {
    yield put({ type: 'FETCH_MOVIES_REQUEST' });

    const response = yield call(fetchMoviesFromAPI, action.query);

    if (response.data.Response === 'False') {
      yield put({
        type: 'FETCH_MOVIES_FAILURE',
        payload: response.data.Error || 'Nenhum filme encontrado.'
      });
      return;
    }

    yield put({
      type: 'FETCH_MOVIES_SUCCESS',
      payload: response.data.Search
    });
  } catch (error) {
    yield put({
      type: 'FETCH_MOVIES_FAILURE',
      payload: error.message
    });
  }
}

function* watchFetchMoviesSaga() {
  yield takeLatest('FETCH_MOVIES_SAGA_REQUEST', fetchMoviesSaga);
}

export default function* rootSaga() {
  yield watchFetchMoviesSaga();
}
