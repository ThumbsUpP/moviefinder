import { take } from 'lodash/fp';
import { SORT_BY } from '@/constants.js';

const { DATE } = SORT_BY;

export const SET_TOP_MOVIES = 'SET_TOP_MOVIES';
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
export const SORT_RESULTS = 'SORT_RESULTS';

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
    case SORT_RESULTS: {
      const { propName } = action;
      return {
        ...state,
        allMovies: {
          ...state.allMovies,
          results: state.allMovies.results.sort((a, b) =>
            propName === DATE
              ? a[propName] < b[propName]
                ? 1
                : -1
              : a[propName] > b[propName]
              ? 1
              : -1
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
