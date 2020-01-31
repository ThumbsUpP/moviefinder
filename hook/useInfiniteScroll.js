import { useState, useEffect } from 'react';

const isScrollReachedBottom = () =>
  window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

const useInfiniteScroll = () => {
  const [reachedBottom, setReachedBottom] = useState(false);
  const handleScroll = () => {
    isScrollReachedBottom() ? setReachedBottom(true) : setReachedBottom(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [reachedBottom];
};

export default useInfiniteScroll;
