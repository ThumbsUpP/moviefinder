import { take } from 'lodash/fp';

export const SET_TOP_MOVIE = 'SET_TOP_MOVIE';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

const reducer = (state, { type, ...action }) => {
  switch (type) {
    case SET_FETCH_STATUS: {
      const { fetchStatus, propName } = action;
      return { ...state, [propName]: { ...state[propName], fetchStatus } };
    }
    case SET_TOP_MOVIE: {
      const { fetchStatus, results } = action;
      return {
        ...state,
        topMovies: { fetchStatus, results: take(10)(results) },
      };
    }
    default:
      return state;
  }
};

export default reducer;
