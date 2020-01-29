import React, { createContext } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import reducer from '@/store/reducer';

export const StoreContext = createContext();

const initialState = {
  prop: 'someProp',
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
