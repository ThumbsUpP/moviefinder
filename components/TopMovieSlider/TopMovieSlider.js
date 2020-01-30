import React, { useContext, useEffect } from 'react';
import './TopMovieSlider.scss';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { StoreContext } from '@/contexts/StoreContext';
import Slider from '@/components/Slider/Slider';
import { fetchTopMovie } from '@/store/actions';
import MovieCard from '@/components/MovieCard/MovieCard';
import { isFetched } from '@/helpers/helpers';

const SLIDER_DEFAULT_SETTING = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
};

const TopMovieSlider = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { fetchStatus, results } = state.topMovies;

  useEffect(() => {
    dispatch(fetchTopMovie());
  }, []);

  return (
    <div className="top-movie-finder">
      <ContentWrapper className="top-movie-finder-content">
        <Slider options={SLIDER_DEFAULT_SETTING}>
          {isFetched(fetchStatus) ? (
            results.map(({ id, ...info }) => <MovieCard key={id} {...info} />)
          ) : (
            <div>loading...</div>
          )}
        </Slider>
      </ContentWrapper>
    </div>
  );
};

export default TopMovieSlider;
