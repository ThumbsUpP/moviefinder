import React, { useState, useEffect, createContext } from 'react';
import { MOBILE_MAX_WIDTH } from '@/constants';

export const IsMobileContext = createContext();
const isMobileSize = () => window.innerWidth <= MOBILE_MAX_WIDTH;

const IsMobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(isMobileSize());
    window.addEventListener('resize', () => setIsMobile(isMobileSize()));
    return () =>
      window.removeEventListener('resize', () => setIsMobile(isMobileSize()));
  }, []);

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
};

export default IsMobileProvider;
