import { API_KEY, BASE_URL, FETCH_STATUSES } from '@/constants.js';
import {
  SET_ALL_MOVIES,
  SET_FETCH_STATUS,
  SET_TOP_MOVIES,
  SORT_RESULTS,
} from './reducer';
import axios from 'axios';

const { FETCHED, ERROR, FETCHING } = FETCH_STATUSES;

const writeUrl = (path, page = 1) =>
  `${BASE_URL}${path}&page=${page}&api_key=${API_KEY}`;

export const setFetchStatus = (propName, fetchStatus) => ({
  type: SET_FETCH_STATUS,
  fetchStatus,
  propName,
});

export const setTopMovie = results => ({
  type: SET_TOP_MOVIES,
  fetchStatus: FETCHED,
  results,
});

export const setAllMovie = (results, page) => ({
  type: SET_ALL_MOVIES,
  fetchStatus: FETCHED,
  results,
  page,
});

export const fetchAllMovie = () => {
  return (dispatch, getState) => {
    const { page } = getState().allMovies;
    dispatch(setFetchStatus('allMovies', FETCHING));
    axios
      .get(writeUrl('discover/movie?sort_by=popularity.desc', page))
      .then(({ data }) => dispatch(setAllMovie(data.results, page + 1)))
      .catch(() => dispatch(setFetchStatus('allMovies', ERROR)));
  };
};

export const fetchTopMovie = () => {
  return dispatch => {
    dispatch(setFetchStatus('topMovies', FETCHING));
    axios
      .get(writeUrl('discover/movie?sort_by=popularity.desc'))
      .then(({ data }) => dispatch(setTopMovie(data.results)))
      .catch(() => dispatch(setFetchStatus('topMovies', ERROR)));
  };
};

export const sortResult = propName => ({
  type: SORT_RESULTS,
  propName,
});
