import { take } from 'lodash/fp';

export const SET_TOP_MOVIE = 'SET_TOP_MOVIE';
export const IS_FETCHING = 'IS_FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';

const reducer = (state, { type, ...action }) => {
  switch (type) {
    case IS_FETCHING:
      return { ...state, fetchStatus: action.fetchStatus };
    case SET_TOP_MOVIE:
      return { ...state, fetchStatus: false, topMovies: take(10)(action.results) };
    case FETCH_ERROR:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default reducer;
