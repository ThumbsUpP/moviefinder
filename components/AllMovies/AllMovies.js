import './AllMovies.scss';
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '@/contexts/StoreContext';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { fetchAllMovie } from '@/store/actions';
import { isFetching } from '@/helpers/helpers';
import MovieCard from '@/components/MovieCard/MovieCard';
import useInfiniteScroll from '@/hook/useInfiniteScroll';
import Loader from '@/components/Loader/Loader';

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
                <MovieCard {...info} className="all-movie" />
              </li>
            ))}
        </ul>
        {isFetching(fetchStatus) && <Loader />}
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
