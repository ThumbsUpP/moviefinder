import axios from 'axios';
//import { API_KEY } from '@/constants.js';
import { IS_FETCHING, SET_TOP_MOVIE, FETCH_ERROR } from './reducer';

const API_KEY = '96e89bdba96e5de45719f7e5ca7a2772';

const writeUrl = path => `https://api.themoviedb.org/3/${path}&api_key=${API_KEY}`;

export const isFetching = isFetching => ({
  type: IS_FETCHING,
  fetchStatus: isFetching,
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  fetchStatus: false,
  fetchError: error,
});

export const setTopMovie = results => ({
  type: SET_TOP_MOVIE,
  results,
});

export const fetchTopMovie = () => {
  return dispatch => {
    dispatch(isFetching(true));
    axios
      .get(writeUrl('discover/movie?sort_by=popularity.desc'))
      .then(({ data }) => dispatch(setTopMovie(data.results)))
      .catch(err => dispatch(fetchError(err)));
  };
};
