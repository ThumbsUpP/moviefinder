import './AllMovies.scss';
import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@/contexts/StoreContext';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { fetchAllMovie } from '@/store/actions';
import { isFetching } from '@/helpers/helpers';
import MovieCard from '@/components/MovieCard/MovieCard';
import useInfiniteScroll from '@/hook/useInfiniteScroll';

const AllMovies = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { results, fetchStatus } = state.allMovies;
  const [reachedBottom] = useInfiniteScroll();

  useEffect(() => {
    dispatch(fetchAllMovie());
  }, []);

  useEffect(() => {
    reachedBottom && dispatch(fetchAllMovie());
  }, [reachedBottom]);

  return (
    <div className="all-movies">
      <ContentWrapper>
        <h1>Tous les films</h1>
        <ul>
          {!!results &&
            results.map(({ id, ...info }) => (
              <li key={id}>
                <MovieCard {...info} />
              </li>
            ))}
        </ul>
        {isFetching(fetchStatus) && <div>loading...</div>}
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
