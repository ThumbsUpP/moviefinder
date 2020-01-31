import { take } from 'lodash/fp';

export const SET_TOP_MOVIES = 'SET_TOP_MOVIES';
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

const reducer = (state, { type, ...action }) => {
  switch (type) {
    case SET_FETCH_STATUS: {
      const { fetchStatus, propName } = action;
      return { ...state, [propName]: { ...state[propName], fetchStatus } };
    }
    case SET_TOP_MOVIES: {
      const { fetchStatus, results } = action;
      return {
        ...state,
        topMovies: { fetchStatus, results: take(10)(results) },
      };
    }
    case SET_ALL_MOVIES: {
      const { fetchStatus, results, page } = action;
      return {
        ...state,
        allMovies: {
          results: [...state.allMovies.results, ...results],
          fetchStatus,
          page,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
