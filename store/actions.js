import { API_KEY, BASE_URL, FETCH_STATUSES } from '@/constants.js';
import { SET_FETCH_STATUS, SET_TOP_MOVIE } from './reducer';
import axios from 'axios';

const { FETCHED, ERROR, FETCHING } = FETCH_STATUSES;

const writeUrl = path => `${BASE_URL}${path}&api_key=${API_KEY}`;

export const setFetchStatus = (propName, fetchStatus) => ({
  type: SET_FETCH_STATUS,
  fetchStatus,
  propName,
});

export const setTopMovie = results => ({
  type: SET_TOP_MOVIE,
  fetchStatus: FETCHED,
  results,
});

export const fetchTopMovie = () => {
  return dispatch => {
    dispatch(setFetchStatus('topMovies', FETCHING));
    axios
      .get(writeUrl('discover/movie?sort_by=popularity.desc'))
      .then(({ data }) => dispatch(setTopMovie(data.results)))
      .catch(() => dispatch(setFetchStatus('topMovies', ERROR)));
  };
};
