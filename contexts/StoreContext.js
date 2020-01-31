import React, { createContext } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import reducer from '@/store/reducer';
import { FETCH_STATUSES } from '@/constants.js';

const { NOT_FETCHED } = FETCH_STATUSES;

export const StoreContext = createContext();

const initialState = {
  topMovies: {
    fetchStatus: NOT_FETCHED,
    results: [],
  },
  allMovies: {
    fetchStatus: NOT_FETCHED,
    results: [],
    page: 1,
  },
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
